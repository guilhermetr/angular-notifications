import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class NotificationsService {

    constructor(private http: HttpClient) {}

    addPushSubscriber(sub:any) {
        return this.http.post('/api/subscribe', sub);
    }

    send() {
        return this.http.post('/api/notification', null);
    }
}