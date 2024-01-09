import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SleepEntryFormComponent } from './sleep-entry.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SleepEntryFormComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SleepEntryFormModule {}
