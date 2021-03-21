import { Injectable } from '@angular/core'
import { Chat } from './chat.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import * as io from 'socket.io-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from "../../../../node_modules/jwt-decode";
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class ChatService {
  private url = environment.basUrl;


  constructor(private httpClient: HttpClient) {
  }

  getPrivateMessage(idCandidat1, idCandidat2) {
    return this.httpClient.get(this.url + 'chat/getPrivateMessage/' + idCandidat1 + '/' + idCandidat2);
  }
  sendMessage(message, idChat) {
    return this.httpClient.post(this.url + 'chat/sendMessage/' + idChat, message);
  }
  deleteChat(chatId) {
    return this.httpClient.get(this.url + 'chat/deleteChat/' + chatId);
  }

}

