import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-ask-yes-no-message',
    templateUrl: './ask-yes-no-message.component.html',
    styleUrls: ['./ask-yes-no-message.component.css'],
})
export class AskYesNoMessageComponent implements OnInit {
    constructor(private chatService: ChatService) {}

    ngOnInit(): void {}

    onAgree() {
        this.chatService.pushUserResponseMessage(true);
    }

    onDisagree() {
        this.chatService.pushUserResponseMessage(false);
    }
}
