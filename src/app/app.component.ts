import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NotificationsService } from './services/notifications.service';

@Component({
  selector: 'app-root',
  template: `
      <button class="button button-primary" (click)="subscribeToNotifications()">
        Request notifications permission
      </button>
`})
export class AppComponent {

  readonly VAPID_PUBLIC_KEY = "BNzt4HejVMO1jvXSze3qSbh3LKuWSV5t8rcIQRANqiZTvszR08nOxSDkXfiS96o9GS5RMr4OZhDEVjDi6hXy-rE";

  constructor(private swPush: SwPush, private notificationsService: NotificationsService) {}

  subscribeToNotifications() {
          this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => { this.notificationsService.addPushSubscriber(sub) })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
