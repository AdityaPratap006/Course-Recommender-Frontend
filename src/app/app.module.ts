import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageCardComponent } from './message-card/message-card.component';
import { AskYesNoMessageComponent } from './ask-yes-no-message/ask-yes-no-message.component';
import { CourseListMessageComponent } from './course-list-message/course-list-message.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { TopicWiseScoreMessageComponent } from './topic-wise-score-message/topic-wise-score-message.component';

@NgModule({
    declarations: [AppComponent, ChatWindowComponent, MessageCardComponent, AskYesNoMessageComponent, CourseListMessageComponent, CourseCardComponent, TopicWiseScoreMessageComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
