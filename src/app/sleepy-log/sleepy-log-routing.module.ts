import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepyLogPage } from './sleepy-log.page';

const routes: Routes = [
  {
    path: '',
    component: SleepyLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepyLogPageRoutingModule {}
