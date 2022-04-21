import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const Bounce:React.FC<ProjectProps> = ({primaryColor, secondaryColor}) => {
  return (
    <ProjectPage projectName='Bounce' primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <h2> Project by Zaid Arshad - Developed from June to July 2019 </h2>

        <TextDescription title='Description'>
            Bounce is a fast paced game coded in Python that tests the user's reaction time
            and color recognition. The objective of the game is to get the color at the
            bottom to match the bouncing square. The game ends when the user
            fails to meet these requirements.
        </TextDescription>

        <TextDescription title='Experience'>
            This is the first major programming project that I worked on outside of my academics.
            It was also my first experience with programming a GUI from scratch. While software design
            is lacking from this project, building on my fundamentals of coding was the objective.
        </TextDescription>

        <TextImg
          title='Controls'
          borderRadius='0px'
          imgSrc='files/bounce/controls.png'>
            Arrow keys: Direction to the corresponding color to move to the bottom for the square to bounce on.
        </TextImg>

        <TextDescription title='Executable'>
            I wanted to easily be able to share this project with my friends and peers
            so I manually created an executable using cx_Freeze in the powershell.
            The executable can be found on the Release page on this repository.
        </TextDescription>

        <TextImg
          title='High Score'
          borderRadius='0px'
          className='img-text'
          imgSrc='files/bounce/high-score.gif'>
            The high score system is made up of a simple reader/writer system for the
            generic text file highscores.txt. This was not the best way to do it as I
            have it writing raw text to the file that can easily break the game if manipulated.
        </TextImg>

        <TextImg
        title='Demo Video'
        className='center'
        imgSrc=''>
        <video style={{paddingTop:'50px', width:'100%'}}
            src='files/bounce/demo-video.mp4' controls/>
    </TextImg>

    </ProjectPage>

  )
}

export default Bounce