import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { ChatRoom, WaitingRoom } from "./components";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { Message, WaitingRoomProps } from "./types";

const App: React.FC = () => {
  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<Array<Message>>([]);

  const joinChatRoom = async (
    username: string,
    chatroom: string
  ): Promise<void> => {
    try {
      const connection: HubConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5293/chat")
        .configureLogging(LogLevel.Information)
        .build();

        //Evento en server
        connection.on("JoinSpecificChatRoom", (username: string, msg:string) => {
          const receivedMessage: Message = {user: username, message: msg};
            setMessages(prevMessages => [...prevMessages, receivedMessage])
        });

        //Aqui importa el orden de los argumentos, literalmente es un spread del lado del server
        connection.on("ReceiveSpecificMessage", (username: string, msg: string) => {
            debugger;
            const receivedMessage: Message = {user: username, message: msg};
            setMessages(prevMessages => [...prevMessages, receivedMessage])
        })

        await connection.start();
        //Nombre del metodo literalmente
        await connection.invoke("JoinSpecificChatRoom", {username, chatroom})
        setConnection(connection);
    } catch (error) {
      console.error("Failed to join chat room:", error);
    }
  };

  const waitingRoomProps: WaitingRoomProps = {
    joinChatRoom,
  };

  return (
    <>
      <div>
        <main>
          <Container>
            <Row className="px-5 my-5">
              <Col sm={12}>
                <h1 className="font-weight-light">Welcome to my chat</h1>
              </Col>
            </Row>
            {! connection ?  <WaitingRoom {...waitingRoomProps} /> : <ChatRoom messages={messages} />}
           
          </Container>
        </main>
      </div>
    </>
  );
};

App.displayName = "Testeoooo";
export default App;
