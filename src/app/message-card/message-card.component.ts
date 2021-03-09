import { Component, Input, OnInit } from '@angular/core';
import { MessageType } from '../models/message.model';

@Component({
    selector: 'app-message-card',
    templateUrl: './message-card.component.html',
    styleUrls: ['./message-card.component.css'],
})
export class MessageCardComponent implements OnInit {
    @Input() isSentByUser: boolean = false;
    @Input() messageText: string = 'Hello there! Amigos!!';
    @Input() messageType: MessageType = MessageType.SIMPLE_TEXT;

    constructor() {}

    ngOnInit(): void {}
}
