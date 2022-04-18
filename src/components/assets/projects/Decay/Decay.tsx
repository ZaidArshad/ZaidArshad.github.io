import React from 'react'
import ProjectPage from '../../../ProjectPage/ProjectPage'
import TextDescription from '../../../TextDescription/TextDescription'
import TextImg from '../../../TextImg/TextImg'

interface Props {
    primaryColor: string,
    secondaryColor: string,
  }

const Decay:React.FC<Props> = ({primaryColor, secondaryColor}) => {
  return (
    <ProjectPage projectName='Decay' primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <h2> Project by Zaid Arshad - Developed from August to December 2020. </h2>
        <h3>
            Level Tool Support added December 2021.
            <br/> Sounds added October 2021.
        </h3>

        <TextDescription title='Description'>
            Decay is a puzzle game coded in C++ that makes use of the SFML
            framework for graphics, input, sound. The objective of the game
            is to strategically clear every platform in the level.
            The game ends when the user completes level 10.
        </TextDescription>

        <TextDescription title='Experience'>
            This was my first major C++ project. I did not know about heaps so all
            of the data is accessed from the stack in this game. I put a large focus
            on clean, readable files while also building on my fundamentals of game development
            from the Bounce game. I eventually added sounds and support for my level
            tool as I had to manually create the levels.
        </TextDescription>

        <TextDescription title='Controls'>
            Left Arrow / A: Move left. <br/>
            Right Arrow / D: Move right. <br/>
            Up Arrow / W: Jump. <br/>
            R: Reset level. <br/>
            Esc: Pause menu. <br/>
        </TextDescription>

        <TextImg
            title='Joypad Controls'
            className='center'
            imgSrc='https://user-images.githubusercontent.com/52565263/144463177-9e8fb257-9cee-4523-949e-9b30d750498f.png'>
                I added controller support for this game because I think having
                analog inputs for movements makes the game feel better.
        </TextImg>

        <TextImg
            title='Platforms'
            className='text-img'
            imgClass='img-platform'
            imgSrc='https://user-images.githubusercontent.com/52565263/144451953-71f9ef08-825e-4579-8016-a742c08d1d52.gif'>
                Each platform has its own health bar indicated by the color of
                the rainbow, the closer it is to red the closer it is to disappearing.
                You can only lower the health of a platform if you touch another platform previously. 
        </TextImg>

        
      <TextDescription title='SFML'>
          I did not use a game engine for this game for the purpose of
          gaining the most from developing it. The physics, buttons, transitions, 
          text prompts and many other features were all done from scratch. 
          The pause menu is able to showcase all the extra work I put 
          in to create a more polished experience.
      </TextDescription>

      <TextDescription title='Hitboxes'>
          The hitboxes for this game were a nightmare but a great
          learning experience. It was difficult because the platforms
          would show a melting effect when destroyed messing with the size.
          I tried my best to keep the code clean with comments because there
          is a lot going on in Game.cpp.
      </TextDescription>

      <div className={'text-img' + ' section'}>
        <div>
            <h1>
                Sound
            </h1>
            <p>
                I revisited the game a year after development and thought that the game
                could be improved greatly with added features of sound effects and music.
            </p>
        </div>
        <p className='img center'>
            <div style={{margin:'-30px'}}></div>
            <div>
                Death <br/>
                <audio style={{width:'100%'}} controls src="sounds/slowdown.mp3"/>
            </div>
            <div>
                Reset <br/>
                <audio style={{width:'100%'}} controls src="sounds/speedup.mp3"/>
            </div>
            <div>
                Background Music <br/>
                <audio style={{width:'100%'}} controls src="sounds/bg.mp3"/>
            </div>
        </p>
    </div>

    <TextImg
        title='Demo Video'
        className='center'
        imgSrc=''>
        <video style={{paddingTop:'50px', width:'100%'}}
            src='https://user-images.githubusercontent.com/52565263/144463495-e99b49ba-b62d-4aef-b372-d04477d43e59.mp4' controls/>
    </TextImg>




    </ProjectPage>
  )
}

export default Decay