import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

// joinChatRoom: (roomId: string) => Promise<void>;

export type WaitingRoomProps = {
  joinChatRoom: (username: string, chatroom: string) => Promise<void>;
};

export const WaitingRoom: React.FC<WaitingRoomProps> = ({ joinChatRoom }) => {
  const [username, setUsername] = useState<string>('');
  const [chatroom, setChatroom] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('estoy jalando');
        joinChatRoom(username, chatroom);
    }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      <Row className="px-5 py-5">
        <Col sm={12}>
          <Form.Group>
            <Form.Control
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control
              placeholder="Chatroom"
              onChange={(e) => setChatroom(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={12}>
          <hr />
          <Button variant="success" type="submit">
            Join chatroom
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
