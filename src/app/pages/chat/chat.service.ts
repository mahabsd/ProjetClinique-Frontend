import { Injectable } from '@angular/core'
import { Chat } from './chat.model';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from "../../../../node_modules/jwt-decode";


@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';


  //decoded: any;
  socket: any;
  token = localStorage.getItem('token');

  constructor(private httpClient: HttpClient) {
    this.socket = io(this.url);
   // this.decoded = jwt_decode(this.token);
  }

  getPrivateMessage(idCandidat1, idCandidat2) {
    return this.httpClient.get(this.url + '/chat/getPrivateMessage/' + idCandidat1 + '/' + idCandidat2);
  }
  sendMessage(message, idChat) {
    return this.httpClient.post(this.url + '/chat/sendMessage/' + idChat, message);
  }
  deleteChat(chatId) {
    return this.httpClient.get(this.url + '/chat/deleteChat/' + chatId);
  }

  uploadFiles(files) {
    return this.httpClient.post(this.url + '/chat/uploadmultiple/', files);

  }
}

