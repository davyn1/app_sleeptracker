import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ModalController } from '@ionic/angular';
import { SleepinessEntryComponent } from '../components/sleepiness-entry/sleepiness-entry.component';

@Component({
  selector: 'app-sleepy-log',
  templateUrl: './sleepy-log.page.html',
  styleUrls: ['./sleepy-log.page.scss'],
})
export class SleepyLogPage implements OnInit {

  showDetails: boolean = false;

  constructor(public sleepService: SleepService, private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.allSleepyData)
  }

  get allSleepyData(): StanfordSleepinessData[] {
    return SleepService.AllSleepinessData
  }
  
  toggleDetails(sleepyData: StanfordSleepinessData) {
    sleepyData.showDetails = !sleepyData.showDetails;
  }

  saveAdditionalNotes(sleepyData: StanfordSleepinessData) {
    // You can save the notes to your data structure or perform any other necessary action
    console.log('Additional Notes:', sleepyData.additionalNotes);
  }

  async openSleepEntryModal() {
    const modal = await this.modalController.create({
      component: SleepinessEntryComponent,
    });
  
    modal.onDidDismiss().then((result) => {
      if (result?.data) {
        // Check the selected sleep entry from the modal
        console.log('Selected Sleep Entry:', result.data);
        this.sleepService.addSleepinessData(result.data.sleepinessLevel);
      }
    });
  
    return await modal.present();
  }
}
