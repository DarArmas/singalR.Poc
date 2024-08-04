import React from "react";
import { Message } from "../types";
import { Table } from "react-bootstrap";

type MessageContainerProps = {
  messages: Array<Message>;
};

export const MessageContainer: React.FC<MessageContainerProps> = (props) => {
  const { messages } = props;
  return (
    <div>
      <Table striped>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={index}>
              <td>
                <strong>{msg.user}:</strong> {msg.message}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
