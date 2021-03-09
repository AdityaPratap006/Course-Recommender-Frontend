import { Injectable } from '@angular/core';
import { IMessage, MessageType } from '../models/message.model';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    messageList: IMessage[] = [
        {
            text: `Hello Aditya!!`,
            type: MessageType.SIMPLE_TEXT,
        },
        {
            text: `Your test score was 70/100`,
            type: MessageType.SIMPLE_TEXT,
        },
        {
            text: `Would you like to view a detailed report of your performance?`,
            type: MessageType.SIMPLE_TEXT,
        },
        {
            text: 'Sure!!',
            type: MessageType.SIMPLE_TEXT,
            fromUser: true,
        },
    ];

    constructor() {}
}