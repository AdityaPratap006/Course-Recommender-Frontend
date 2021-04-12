import { Injectable } from '@angular/core';
import { IMessage, MessageType } from '../models/message.model';
import { TestScoreData } from '../models/score.model';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    messageList: IMessage[] = [];
    testScoreData: TestScoreData | undefined;

    constructor() {}

    pushWelcomeMessage() {
        this.messageList.push({
            text: `Hello Aditya!!`,
            type: MessageType.SIMPLE_TEXT,
        });
    }

    pushTestScoreMessage(obtainedMarks: number, totalMarks: number) {
        this.messageList.push({
            text: `Your test score was ${obtainedMarks} out of ${totalMarks}`,
            type: MessageType.SIMPLE_TEXT,
        });
    }

    pushRequestToShowDetailedReportMessage() {
        this.messageList.push({
            text: `Would you like to view a detailed report of your performance?`,
            type: MessageType.ASK_YES_OR_NO,
        });
    }

    pushUserResponseMessage(response: boolean) {
        if (response) {
            this.messageList.push({
                text: 'Sure!!',
                type: MessageType.SIMPLE_TEXT,
                fromUser: true,
            });
            setTimeout(() => {
                this.pushDetailedReportMessage();
            }, 200);
        } else {
            this.messageList.push({
                text: 'No Thanks!',
                type: MessageType.SIMPLE_TEXT,
                fromUser: true,
            });
        }
    }

    pushCourseListMessage() {
        this.messageList.push({
            text: 'We recommend following courses for you!',
            type: MessageType.COURSE_LIST,
        });
    }

    pushDetailedReportMessage() {
        this.messageList.push({
            text: 'Your topic wise score is as follows:',
            type: MessageType.TOPIC_WISE_SCORE,
        });
        setTimeout(() => {
            this.pushCourseListMessage();
        }, 200);
    }
}
