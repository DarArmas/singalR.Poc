import { Message } from "./models";

export type WaitingRoomProps = {
    joinChatRoom: (username: string, chatroom: string) => Promise<void>;
  };

export type ChatRoomProps = {
    messages: Array<Message>,
    sendMessage: (message: string) => Promise<void>;
}

export type SendMessageFormProps = {
  sendMessage: (message: string) => Promise<void>;
};