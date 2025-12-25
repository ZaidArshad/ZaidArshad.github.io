import React from 'react'
import ProjectPage, { ProjectProps } from '../Page/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const Netpardy: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectPage project={project} gitBG={project?.secondaryColor}>
      <h2> Group Project by Zaid Arshad with 4 others - Developed from July 2022 to August 2022 </h2>

      <TextDescription title='Description'>
        NETPARDY! is a web based version of jeopardy where you
        respond to hints using questions. We used sockets for
        connectivity and PyQt for our graphical user interface.
      </TextDescription>

      <TextImg
        title='Multithreading'
        imgSrc='files/netpardy/threads.png'>
        I spent a significant amount of time designing the structure and
        flow of the application. Since we used networking and a GUI we
        needed multiple threads to prevent hanging. We also managed a
        server-client relationship to broadcast data across multiple clients.
        There would be a thread each for the interface, sending data to the server,
        and listening for data from the server. Every client will be attached to
        the server using a TCP connection over a socket. Each client will have its
        own server assigned thread to listen and send messages back and forth.
      </TextImg>

      <TextDescription title='Message Header'>
        The client attaches a header to every message that gets casted
        to the server. In the header, the key, “SEND_TYPE” defines who is
        sending the message. There are three possible values for this,
        “BROADCAST”, “CLIENT” and “SERVER”. “BROADCAST” tells the server
        to broadcast this current message to all other clients. “CLIENT”
        is for the server to differentiate between a regular and broadcast
        message. Conversely, “SERVER” is for the client to pick apart
        the server and broadcasted messages.
      </TextDescription>

      <TextDescription title='Messaging Scheme'>
        <p>
          We used a token messaging scheme. There are 2 files in the repository
          &#40;client_tokens.json and server_tokens.json&#41; that show what each token includes.
          The descriptions for each token will be in tokens.py as that is a shared place
          for both client and server to access them. As for the content of the messages,
          keys.py has descriptions for each of them.
        </p>
        <p>Example message for a player joining. </p>
        <p>
          &#123; <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&quot;token&quot;: &quot;player_join&quot;, <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&quot;send_type &quot;: &quot;client&quot;, <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&quot;player_num &quot;: 0, <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&quot;player_name &quot;: &quot;Tom&quot;, <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&quot;player_score &quot;: 0 <br></br>
          &#125;
        </p>
      </TextDescription>

      <TextImg
        title='Shared Objects: Board, Buzzer and Answer Textbox'
        className='center'
        imgClass='img-long'
        borderRadius='20px'
        imgSrc='files/netpardy/netpardy.gif'>
        There are various shared objects in the game such as the question board,
        buzzer and the textbox. The question board is shared amongst all the
        players and only one player can select a question on the board when it
        is their turn to select a question. Following the game of Jeopardy, the
        player who answers the question correctly gets to select the next
        question and at the start of the game, the first player to connect
        is allowed to choose the first question.
      </TextImg>

    </ProjectPage>
  )
}

export default Netpardy