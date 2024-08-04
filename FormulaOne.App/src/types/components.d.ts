import { Message } from "./models";

export type WaitingRoomProps = {
    joinChatRoom: (username: string, chatroom: string) => Promise<void>;
  };

export type ChatRoomProps = {
    messages: Array<Message>
}