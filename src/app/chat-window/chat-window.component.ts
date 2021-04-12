import { Component, OnInit } from '@angular/core';
import { IMessage } from '../models/message.model';
import { ChatService } from '../services/chat.service';
import { TestScoreData } from '../models/score.model';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.component.html',
    styleUrls: ['./chat-window.component.css'],
    providers: [ChatService],
})
export class ChatWindowComponent implements OnInit {
    messages: IMessage[] = [];
    apiBaseURL: string = `https://course-recommendation-api.herokuapp.com`;

    constructor(private chatService: ChatService) {}

    ngOnInit(): void {
        this.messages = this.chatService.messageList;

        setTimeout(() => {
            this.chatService.pushWelcomeMessage();
        }, 800);

        setTimeout(() => {
            this.fetchTestScore();
        }, 1000);
    }

    async fetchTestScore() {
        try {
            const response = await fetch(`${this.apiBaseURL}/test_score/${1}`);
            const data: TestScoreData[] = await response.json();
            if (data.length === 0) {
                return;
            }

            const scoreData = data[0];
            const totalMarks = +scoreData.total;
            const obtainedMarks = +scoreData.obtained;
            this.chatService.pushTestScoreMessage(obtainedMarks, totalMarks);
            this.chatService.testScoreData = scoreData;
            setTimeout(() => {
                this.chatService.pushRequestToShowDetailedReportMessage();
            }, 200);
        } catch (error) {
            alert('Something went wrong');
        }
    }
}
