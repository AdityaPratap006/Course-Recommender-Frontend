export enum MessageType {
    SIMPLE_TEXT = 'SIMPLE_TEXT',
    ASK_YES_OR_NO = 'ASK_YES_OR_NO',
    COURSE_LIST = 'COURSE_LIST',
}

export interface IMessage {
    text: string;
    type: MessageType;
    fromUser?: boolean;
}
