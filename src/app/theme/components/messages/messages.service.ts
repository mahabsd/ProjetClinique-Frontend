import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import * as io from 'socket.io-client';

@Injectable()
export class MessagesService {

    private messages = [
        {
            name: 'ashley',
            text: 'After you get up and running, you can place Font Awesome icons just about...',
            time: '1 min ago'
        },
        {
            name: 'michael',
            text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
            time: '2 hrs ago'
        },
    ];
    private url = 'http://localhost:3000';
    socket: any;
    constructor(private httpClient: HttpClient) {
        this.socket = io(this.url);
        // this.decoded = jwt_decode(this.token);
    }

    public getMessages(): Array<Object> {
        return this.messages;
    }
    public sendNotification(message) {
        return this.httpClient.post(this.url + '/notifications/send-notification/', message);
    }

    public getNotification() {
        return this.httpClient.get(this.url + '/notifications/get-notification/');
    }
}