import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepyLogPageRoutingModule } from './sleepy-log-routing.module';

import { SleepyLogPage } from './sleepy-log.page';
import { SleepinessEntryModule } from '../components/sleepiness-entry/sleepiness-entry.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepyLogPageRoutingModule
  ],
  declarations: [SleepyLogPage]
})
export class SleepyLogPageModule {}
