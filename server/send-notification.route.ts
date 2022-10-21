import {USER_SUBSCRIPTIONS} from "./in-memory-db";

const webpush = require('web-push');

export function sendNotification(req: any, res: any) {

    console.log('Total subscriptions', USER_SUBSCRIPTIONS.length);

    // sample notification payload
    const notificationPayload = {
        "notification": {
            "id": 0,
            "title": "Notification Test Title",
            "body": "This is the notification body",
        }
    };

    Promise.all(USER_SUBSCRIPTIONS.map((sub: any) => webpush.sendNotification(
        sub, JSON.stringify(notificationPayload) )))
        .then(() => res.status(200).json({message: 'Notification sent successfully.'}))
        .catch(err => {
            console.error("Error sending notification, reason: ", err);
            res.sendStatus(500);
        });
}
