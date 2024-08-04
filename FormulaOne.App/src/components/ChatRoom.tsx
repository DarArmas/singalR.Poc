import React from "react";
import { ChatRoomProps } from "../types";
import { Col, Row } from "react-bootstrap";
import { MessageContainer } from "./MessageContainer";
import { SendMessageForm } from "./SendMessageForm";

export const ChatRoom: React.FC<ChatRoomProps> = (props) => {
  const { messages, sendMessage } = props;

  return (
    <>
      <Row className="px-5 py-5">
        <Col sm={10}>
          <h2>ChatRoom</h2>
        </Col>
      </Row>
      <Row className="px-5 py-5">
        <Col sm={12}>
          <MessageContainer messages={messages} />
        </Col>
        <Col sm={12}>
          <SendMessageForm sendMessage={sendMessage} />
        </Col>
      </Row>
    </>
  );
};
