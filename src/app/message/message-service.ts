import { Injectable, OnInit } from '@angular/core';
import { Message } from '../domain/message';

@Injectable()
export class MessageService {
	private messages: Message[];

	constructor() {
		this.messages = [
  			{hello: "Hello", helloWho: "World"},
  			{hello: "Hello", helloWho: "Mars"},
  			{hello: "Bonjour", helloWho: "Monde"}
  		]
	}

	getMessages(): Message[] {
		return this.messages;
	}
}
