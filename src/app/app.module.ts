import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WatcherBoardComponent } from './watcher-board/watcher-board.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StepCountComponent } from './step-count/step-count.component';

const routes: Routes = [
  { path: '', redirectTo: 'watcher', pathMatch: 'full' },
  { path: 'watcher', component: WatcherBoardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WatcherBoardComponent,
    StepCountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
