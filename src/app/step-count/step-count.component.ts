import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const stepCountQuery = gql`
  {
    hello
    stepCount
    runTime
    walkTime
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
  runTime: number;
  walkTime: number;
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
        this.runTime = result.data && result.data['runTime'];
        this.walkTime = result.data && result.data['walkTime'];
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}
