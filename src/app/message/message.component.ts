import { Component, OnInit } from '@angular/core';
import { Message } from '../domain/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[];
  userName: string = "Nick";

  constructor() {
  	this.setMessages();
  }

  setMessages() {
  	this.messages = [
  	{hello: "Hello", helloWho: "World"},
  	{hello: "Hello", helloWho: "Mars"},
  	{hello: "Bonjour", helloWho: "Monde"}
  ]
  }

  ngOnInit() {
  }

  remove(message: Message) {
  	this.messages = this.messages.filter(me => me !== message);
  }

  setUserName(userName: string) {
  	this.userName = userName;
  }

}
