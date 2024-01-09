import { Component, OnInit} from '@angular/core';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.notificationsService.scheduleSleepinessNotifications();
  }

}
