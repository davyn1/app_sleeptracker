import { Component, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleepinessEntryModule } from './sleepiness-entry.module';

@Component({
  selector: 'app-sleepiness-entry',
  templateUrl: './sleepiness-entry.component.html',
  styleUrls: ['./sleepiness-entry.component.scss'],
})
export class SleepinessEntryComponent {
  @Output() sleepEntryAdded = new EventEmitter<{ sleepinessLevel: number }>();

  sleepinessLevel: number;
  isInvalidTime: boolean = false;

  constructor(private modalController: ModalController) {
    this.sleepinessLevel = 1;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  addSleepinessEntry() {
    this.modalController.dismiss({
      sleepinessLevel: this.sleepinessLevel,
    });
  }

}
