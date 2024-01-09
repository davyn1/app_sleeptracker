// notifications.service.ts

import { Injectable } from '@angular/core';
import { LocalNotifications, PermissionStatus } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor() {}

  async scheduleSleepinessNotifications() {
    // Check and request permissions
    const permissionStatus = await this.checkPermissions();

    if (permissionStatus) {
      // Schedule sleepiness logging notifications at 12:00 PM, 4:00 PM, and 8:00 PM
      await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Sleepiness Log',
            body: 'Log your sleepiness now!',
            id: 1,
            schedule: { at: this.getNotificationTime(12, 0) },
          },
          {
            title: 'Sleepiness Log',
            body: 'Log your sleepiness now!',
            id: 2,
            schedule: { at: this.getNotificationTime(16, 0) },
          },
          {
            title: 'Sleepiness Log',
            body: 'Log your sleepiness now!',
            id: 3,
            schedule: { at: this.getNotificationTime(20, 0) },
          },
        ],
      });
    } else {
      console.error('Permission denied for notifications.');
    }
  }

  async checkPermissions(): Promise<PermissionStatus> {
    return await LocalNotifications.requestPermissions();
  }

  private getNotificationTime(hours: number, minutes: number): Date {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    return today;
  }
}
