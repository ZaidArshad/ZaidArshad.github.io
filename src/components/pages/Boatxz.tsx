import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const Boatxz:React.FC<ProjectProps> = ({primaryColor, secondaryColor}) => {
  return (
    <ProjectPage projectName='Boatxz' primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <h2> Project by Zaid Arshad - Developed from January 2022 to April 2022 </h2>

        <TextDescription title='Description'>
            Boatxz is a 3D game made in Unity that challenges the player's 
            thumb dexterity by controlling a boat with their thumbs. It 
            features several game modes both single and multiplayer. 
        </TextDescription>

        <TextDescription title='Experience'>
            This is my first time creating a 3D game and my goal is to get a 
            higher level understanding of what it takes to make a 3D game 
            engine by using an engine itself. I used Blender to create the 
            3D model for the character and single player levels. 
        </TextDescription>

        <TextImg
          title='Mechanics'
          imgSrc=''>
            Using the sticks you row your boat. Movement only occurs when the 
            paddles are in the water and the paddles are moved back and forth. 
            You turn using the paddles in the same way a real boat does. You 
            can also turn really fast by spinning both oars in the opposite direction. 
        </TextImg>

        <TextImg
            title='Single Player'
            className='center'
            imgSrc=''>
            I designed and created 6 levels to challenge the player's mechanics 
            and maneuverability in the boat. These levels were modeled in 
            Blender in order for the water texture to properly be set. 
        </TextImg>

        <TextImg
          title='Speedrun'
          imgSrc=''>
            I created this game with multiplayer games in mind. There is a race
            against each other where the first person to cross the last post wins.
            Another mode is boathunt, where one person has 5 minutes to catch the
            other boats. If all hiders have not been caught in those 5 minutes
            then they win otherwise the hunter wins. The last mode is battle,
            your goal is to knock the opponents off of the platform with your
            missiles. Last one standing wins.
        </TextImg>

    </ProjectPage>
  )
}

export default Boatxz