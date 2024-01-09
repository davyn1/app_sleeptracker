import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvernightLogPageRoutingModule } from './overnight-log-routing.module';
import { OvernightLogPage } from './overnight-log.page';
import { SleepEntryFormModule } from '../components/sleep-entry/sleep-entry.module'; // Adjust the path accordingly


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvernightLogPageRoutingModule,
  ],
  declarations: [OvernightLogPage]
})
export class OvernightLogPageModule {}
