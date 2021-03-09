import { Component, OnInit } from '@angular/core';
import { IMessage } from '../models/message.model';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.css'],
    providers: [ChatService],
})
export class ChatWindowComponent implements OnInit {
    messages: IMessage[] = [];

    constructor(private chatService: ChatService) {}

    ngOnInit(): void {
        this.messages = this.chatService.messageList;
    }
}
