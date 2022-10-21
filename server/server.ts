
import * as express from 'express';
import {Application} from "express";
import { addPushSubscriber } from './add-push-subscriber.route';
import { sendNotification } from './send-notification.route';
const bodyParser = require('body-parser');

const webpush = require('web-push');

const vapidKeys = {
    "publicKey":"BNzt4HejVMO1jvXSze3qSbh3LKuWSV5t8rcIQRANqiZTvszR08nOxSDkXfiS96o9GS5RMr4OZhDEVjDi6hXy-rE",
    "privateKey":"6VKk_80ZeIwdEfW2Kce-6YRYH1A8EhVuiJrZd2j3_To"
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const app: Application = express();

app.use(bodyParser.json());

// REST API
app.route('/api/subscribe')
    .post(addPushSubscriber);

app.route('/api/notification')
    .post(sendNotification);

// launch an HTTP Server
const httpServer:any = app.listen(9000, () => {
    console.log("HTTP Server running at http://localhost:" + httpServer.address().port);
});
