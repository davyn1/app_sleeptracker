import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SleepinessEntryComponent } from './sleepiness-entry.component';

@NgModule({
  declarations: [SleepinessEntryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [SleepinessEntryComponent],
})
export class SleepinessEntryModule {}
