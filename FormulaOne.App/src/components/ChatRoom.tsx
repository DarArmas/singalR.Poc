import React from "react";
import { ChatRoomProps } from "../types";
import { Col, Row } from "react-bootstrap";
import { MessageContainer } from "./MessageContainer";

export const ChatRoom: React.FC<ChatRoomProps> = (props) => {
  const { messages } = props;

  return (
    <>
      <Row className="px-5 py-5">
        <Col sm={10}>
          <h2>ChatRoom</h2>
        </Col>
        <Col></Col>
      </Row>
      <Row className="px-5 py-5">
        <Col sm={12}>
          <MessageContainer messages={messages} />
        </Col>
      </Row>
    </>
  );
};
