import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const LevelTool:React.FC<ProjectProps> = ({project}) => {
  return (
    <ProjectPage project={project}>
        <h2> Project by Zaid Arshad - Developed from December 2021 to January 2022. </h2>

        <TextDescription title='Description'>
            The Decay Level Tool is a program that helps develop levels for the game “Decay”.
        </TextDescription>

        <TextDescription title='Experience'>
            I've been trying to branch out from consumer based programs to developer based programs.
            A nice thing about this is that I can easily critique it by using it and seeing the flaws in action.
            While the technology is the same from the Decay game, the concepts are much different.
            Everything is about the mouse and there is a lot to track in terms of collision
            detection making a great learning experience.
        </TextDescription>

        <TextImg
            title='Snappy to Smooth Dragging'
            className='center'
            imgSrc='files/leveltool/snappy-to-smooth-dragging.gif'>
                The collision detection needs to change dynamically with where the user
                clicks so that the drag and drop processis smooth. The origin of the texture
                changes with every click to allow the user to click on the sprite in any area
                without it snapping to the center.
        </TextImg>

        <TextImg
            title='Dynamic hitboxes'
            imgSrc='files/leveltool/dynamic-hitboxes.gif'>
                Since the origin is changing to make the dragging smooth, the hitboxes
                need to match that. As the origin changes, the boundary where
                the can's position can go also changes.
        </TextImg>

        <TextImg
            title='Adding and removing platforms'
            className='center'
            imgClass='img-long'
            imgSrc='files/leveltool/adding-and-removing-platforms.gif'>
                Platforms can be added by clicking the “add” button on the buttons panel.
                Similarly, they can be removed by first clicking the platform
                and selecting the “remove” button.
        </TextImg>

        <TextImg
            title='Resizing'
            imgSrc='files/leveltool/resizing.gif'>
                When a platform is clicked, it can be resized by clicking the points
                generated on the corners. Platforms cannot have a width or height smaller than 10 pixels. 
        </TextImg>

        <TextImg
            title='Adjusting properties'
            className='text-img'
            imgClass='img'
            imgSrc='files/leveltool/adjusting-properties.gif'>
                When a platform is clicked, the properties panel displays health, x position, y position, width,
                and height. The health property is made up of a slider that will snap to the nearest
                tick when the left click is released. The other properties have buttons that can be
                used to accurately change their respective values.
        </TextImg>

        <TextImg
            title='Layering platforms'
            className='center'
            imgClass='img-long'
            imgSrc='files/leveltool/layering-platforms.gif'>
                Platforms can be layered using the “put front” and “put back” buttons.
                Platforms most recently added will be drawn at the front. 
        </TextImg>

        <TextImg
            title='Exporting levels'
            className='img-text'
            imgClass='img'
            imgSrc='files/leveltool/exporting-levels.gif'>
                Once a level has been made, it can be exported with the “EXPORT” button. Your default .txt
                editor will open and display the text in the format of:
                    <br/><br/> Player_Y Player_Y <br/>
                    HEALTH WIDTH HEIGHT XPOS YPOS <br/>
                    HEALTH WIDTH HEIGHT XPOS YPOS <br/>
                    HEALTH WIDTH HEIGHT XPOS YPOS <br/> <br/>
                The first line is the position of where that platform would start, and the subsequent lines
                would be the details of each platform. From front to back the platforms will
                be drawn based on the order in the file.
        </TextImg>


        

    </ProjectPage>
  )
}

export default LevelTool