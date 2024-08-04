import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { WaitingRoom, WaitingRoomProps } from "./components";
import axios from "axios";

const App: React.FC = () => {
  const joinChatRoom = async (username: string, chatroom: string): Promise<void> => {
    try {
      await axios.post('/api/joinChatRoom', { username, chatroom });
      console.log('Successfully joined the chat room');
    } catch (error) {
      console.error('Failed to join chat room:', error);
    }
  };

  const waitingRoomProps: WaitingRoomProps = {
    joinChatRoom
  }

  return (
    <>
      <div>
        <main>
          <Container>
            <Row class="px-5 my-5">
              <Col sm={12}>
                <h1 className="font-weight-light">Welcome to my chat</h1>
              </Col>
            </Row>
            <WaitingRoom {...waitingRoomProps}/>
          </Container>
        </main>
      </div>
    </>
  );
};

App.displayName = 'Testeoooo';
export default App;
