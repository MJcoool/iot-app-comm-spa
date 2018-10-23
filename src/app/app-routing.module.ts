import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatcherBoardComponent } from './watcher-board/watcher-board.component';
const routes: Routes = [
  { path: '', redirectTo: 'watcher', pathMatch: 'full' },
  {path: 'watcher', component: WatcherBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
