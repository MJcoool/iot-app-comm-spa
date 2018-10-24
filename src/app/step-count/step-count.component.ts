import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const stepCountQuery = gql`
  {
    hello
    stepCount
  }
`;

@Component({
  selector: 'app-step-count',
  templateUrl: './step-count.component.html',
  styleUrls: ['./step-count.component.scss']
})
export class StepCountComponent implements OnInit {
  hello = 'hok';
  stepCount: number;
  loading = true;
  errors: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: stepCountQuery
      })
      .valueChanges.subscribe(result => {
        this.stepCount = result.data && result.data['stepCount'];
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}
