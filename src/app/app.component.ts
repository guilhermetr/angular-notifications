import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `
      <button class="button button-primary" (click)="subscribeToNotifications()">
        Request notifications permission
      </button>
`})
export class AppComponent {

  readonly VAPID_PUBLIC_KEY = "BB6QW1_dhyh2Wz8pQUvJPA1PTZyw_yyS9X60clUa4xxNQ9ct_Jq8G-CGHclXIUI8z4XQVV-I5fl5GXcrkEKlQ30";

  constructor(private swPush: SwPush) {}

  subscribeToNotifications() {
          this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
      })
      .then(sub => { /* storeSubscriptionInTheBackend(sub) */ })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
