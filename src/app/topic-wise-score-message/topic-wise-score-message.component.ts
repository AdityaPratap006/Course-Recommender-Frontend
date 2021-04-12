import { Component, OnInit } from '@angular/core';
import { TopicWiseScoreData } from '../models/score.model';
import { ChatService } from '../services/chat.service';

@Component({
    selector: 'app-topic-wise-score-message',
    templateUrl: './topic-wise-score-message.component.html',
    styleUrls: ['./topic-wise-score-message.component.css'],
})
export class TopicWiseScoreMessageComponent implements OnInit {
    topicWiseScoreData: TopicWiseScoreData[] | undefined;

    constructor(private chatService: ChatService) {}

    ngOnInit(): void {
        this.topicWiseScoreData = this.chatService.testScoreData?.topicScore;
    }
}
