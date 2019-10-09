import { Component, OnInit } from '@angular/core';
import { Message } from '../domain/message';
import { MessageService } from './message-service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[];
  userName: string = "Nick";

  constructor(private service: MessageService) {
  }

  ngOnInit() {
  	this.resetMessages();
  }

  remove(message: Message) {
  	this.messages = this.messages.filter(me => me !== message);
  }

  resetMessages() {
  	this.messages = this.service.getMessages();
  }

  setUserName(userName: string) {
  	this.userName = userName;
  }

}
