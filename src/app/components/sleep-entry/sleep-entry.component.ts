// sleep-entry.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sleep-entry',
  templateUrl: './sleep-entry.component.html',
  styleUrls: ['./sleep-entry.component.scss'],
})
export class SleepEntryFormComponent {
  @Output() sleepEntryAdded = new EventEmitter<{ startOfSleep: Date; endOfSleep: Date }>();

  newSleepStart: string;
  newSleepEnd: string;
  isInvalidTime: boolean = false;


  constructor(private modalController: ModalController) {
    const currentDate = new Date();
    this.newSleepStart = currentDate.toISOString();
    this.newSleepEnd = currentDate.toISOString();
  }

  // For the cancel button
  dismissModal() {
    this.modalController.dismiss();
  }

  addSleepEntry() {
    // Check if both start and end times are set
    if (this.newSleepEnd <= this.newSleepStart) {
      this.isInvalidTime = true;
    } else {
      const startOfSleep = new Date(this.newSleepStart);
      const endOfSleep = new Date(this.newSleepEnd);
  
      console.log('Start of Sleep:', startOfSleep);
      console.log('End of Sleep:', endOfSleep);
  
      // Reset the error flag
      this.isInvalidTime = false;


    this.modalController.dismiss({
      startOfSleep,
      endOfSleep,
    });
  }
}
}
