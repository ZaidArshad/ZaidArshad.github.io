import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const Laps:React.FC<ProjectProps> = ({project}) => {
  return (
    <ProjectPage project={project} gitBG={project.secondaryColor}>
        <h2> Project by Zaid Arshad - Developed from April to December 2021. </h2>

        <TextDescription title='Description'>
            Laps is an Android application coded in Kotlin that
            makes use of the Google Maps API to record jogging/running
            tracks for the user. Along with a visual track to follow,
            best time and distance are also recorded
        </TextDescription>

        <TextDescription title='Experience'>
            This was the first time I made use of a cloud API in a program.
            I created this app because I wanted to keep track of the routes
            I was running and how fast I could run them. Trying to improve
            my personal best is always a fun thing to do.
        </TextDescription>

        <TextImg
            title='Splash Screen'
            className='img-text'
            imgClass='img-phone'
            imgSrc='files/laps/splash-screen.gif'>
                Designing the splash screen was a fun thing to do because I
                needed one to create time to establish a connection to location services. 
        </TextImg>

        <TextImg
            title='Recording a New Route'
            className='img-text'
            imgClass='img-phone'
            imgSrc='files/laps/recording-a-new-route.gif'>
                When recording a new route the user's marker will 
                create a trail to indicate the path. A timer
                will be counting the time it takes for the user to 
                complete their track. Once a track has been
                completed a prompt will show to name the route,
                elapsed time and estimated distance.  
        </TextImg>

        <TextImg
            title='Finishing a Recorded Run'
            className='img-text'
            imgClass='img-phone'
            imgSrc='files/laps/finishing-a-recorded-run.gif'>
                Once the user clicks the finish button at the bottom of their screen their run
                ends. A prompt shows up with their time, length, and textbox to set a name.
                The run will then be saved once “confirm” is pressed.
        </TextImg>

        <TextImg
            title='Running Recorded Routes'
            className='img-text'
            imgClass='img-phone'
            imgSrc='files/laps/running-recorded-routes.gif'>
                To run a recorded route the user must click the arrow at the bottom
                to show the list of routes. When clicked, a visual path will display
                on the map and the camera will pan to it. The timer will commence
                3 seconds after the start button is pressed.
        </TextImg>

        <TextImg
            title='Posting a New Best Time'
            className='center'
            imgSrc='files/laps/posting-a-new-best-time.png'>
                When a new best time is posted a little text pop up will
                show up with the time and can be dismissed with a simple click.
        </TextImg>


    </ProjectPage>
  )
}

export default Laps