import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MenuService } from '../menu/menu.service';
import { MessagesService } from 'src/app/theme/components/messages/messages.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [MessagesService]
})
export class FavoritesComponent implements OnInit {
  toppings;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  public menuItems;
  public favorites; 
  lengthNotif
  messages: never[];
  token = localStorage.getItem('token');
  decoded = JSON.parse(JSON.stringify(jwt_decode(this.token)))
  userId = this.decoded._id;
  private websocket = environment.socketBaseUrl;
  constructor(public menuService:MenuService, private messagesService: MessagesService, public socket: Socket) {
    this.socket = io(this.websocket, { transports: ['websocket'] });
    this.socket.on('notification', (res) => {
      this.getNotification();
      });
   }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems().filter(menu => menu.routerLink != null || menu.href !=null);
    this.socket = io(this.websocket, { transports: ['websocket'] });
    this.socket.on('notification', (res) => {
      this.getNotification();
      });
  }
  getNotification() {

    this.messagesService.getNotification().subscribe((res: []) => {      
      this.messages = res.filter((notification : any)=>
         (notification.text === "sent you a message"))
        // && ( notification.reciever._id ===this.userId)&&(notification.userOwner._id !=this.userId)
        this.messages =  this.messages.filter((notification : any)=>
        (( notification.reciever._id ===this.userId)))
         this.lengthNotif = this.messages.length          
    });
  }

}
