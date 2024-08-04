import React, { useState } from "react";
import { SendMessageFormProps } from "../types";
import { Button, Form, InputGroup } from "react-bootstrap";

export const SendMessageForm: React.FC<SendMessageFormProps> = (props) => {
  const [message, setMessage] = useState<string>("");
  const { sendMessage } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage(""); //reset input
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
      <InputGroup.Text>Chat</InputGroup.Text>
        <Form.Control
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Type a message"
        />
        <Button variant="primary" type="submit" disabled={!message}>Send message</Button>
      </InputGroup>
    </Form>
  );
};
