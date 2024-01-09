import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { ModalController } from '@ionic/angular';
import { SleepEntryFormComponent } from '../components/sleep-entry/sleep-entry.component';


@Component({
  selector: 'app-overnight-log',
  templateUrl: './overnight-log.page.html',
  styleUrls: ['./overnight-log.page.scss'],
})
export class OvernightLogPage implements OnInit {
  sleepData: OvernightSleepData[] = [];
  newSleepStart: Date = new Date();
  newSleepEnd: Date = new Date();

  constructor(private modalController: ModalController, public sleepService: SleepService) { }

  ngOnInit() {
    console.log(this.allOvernightData)
  }

  get allOvernightData() {
		return SleepService.AllOvernightData;
	}

  async openSleepEntryModal() {
    const modal = await this.modalController.create({
      component: SleepEntryFormComponent,
    });
    
    modal.onDidDismiss().then((result) => {
      if (result?.data) {
        console.log('Selected Sleep Entry:', result.data);
        this.sleepService.addOvernightData(result.data.startOfSleep, result.data.endOfSleep);
        this.sleepData = this.allOvernightData;
      }
    });

    return await modal.present();

  }
}
