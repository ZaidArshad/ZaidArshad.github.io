import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'


const WatRe:React.FC<ProjectProps> = ({primaryColor, secondaryColor}) => {
  return (
    <ProjectPage projectName='WatRe' primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <h2> Project by Zaid Arshad. Developed from June to August 2020 </h2>
      <h3> REST API compatibility added in January 2022. </h3>

      <TextDescription title='Description'>
        WatRe is an Android application coded in Java that makes use of notifications
        to remind the user to drink water. It can also remind you via computer with the
        .NET server and python script. When a notification is sent to the phone a
        sound will be played on the computer it is connected to. 
      </TextDescription>

      <TextDescription title='Experience'>
        This was the first major Android project I worked on. I made this application
        for myself as I did poorly staying hydrated. The objective of this application
        is to remind myself to drink water periodically throughout the day with daily and hourly notifications.
      </TextDescription>

      <TextDescription title='APK'>
        The APK for this app can be found under the &nbsp; 
        <a href="https://github.com/ZaidArshad/WatRe/releases/tag/v1.0.0">
          releases 
        </a>
        &nbsp; tab on this repository.
      </TextDescription>

      <TextImg
        title='Daily Reminder'
        imgSrc='files/watre/daily-reminder.png'>
            The user will be greeted every morning with a reminder to start drinking water.
            This notification cannot be closed unless the user opens the app. While this may
            be an aggressive approach, it will prevent them from being lazy and guilt them into drinking more water.
      </TextImg>

      <TextImg
        title='Press the Button'
        className='img-text'
        imgClass='img-phone'
        imgSrc='files/watre/press-the-button.gif'>
            Pressing the main water button will start a background process to
            remind you to drink water again in the next 1.5 hours. Once it is
            clicked it will turn grey showing that it is unclickable.
            It will also fill the bar representing how much water you have drank.
      </TextImg>

      <TextImg
        title='Button Phases'
        className='center'
        imgSrc='files/watre/button-phases.png'>
          The button has 3 phases.
      </TextImg>

      <TextImg
        title='Hourly Reminder'
        imgSrc='files/watre/hourly-reminder.png'>
            Every 1 hour and 30 minutes after the button is pressed
            there is a reminder to drink water again.
            This will happen up to 7 times a day signifying the
            recommended 8 glasses of water that a human should drink.
      </TextImg>

      <TextImg
        title='Animated Background'
        className='img-text'
        imgClass='img-phone'
        imgSrc='files/watre/animated-background.gif'>
            The animated background is a pleasant feature to look at every time you open the app.
      </TextImg>

      <TextDescription title='.NET Server'>
        I used the WatRe app to remind myself to drink water but I did not check my
        phone enough. The .NET server and REST API enable communication between my phone and my computer.
        The server and python script runs on startup using a VB Script (Visual Basic Script). The python
        script gets a status from the REST API every 5 minutes to check if the notification was sent.
        Once a true response is received, the script will play a sound to remind the user to drink
        water/check their phone for the notification.
      </TextDescription>

      <TextDescription title='Sound Queue Conditioning'>
        As demonstrated by Ivan Pavlov's experiments with classical conditioning,
        I often feel a dry and parched mouth when the sound is heard. This was
        not what I intended when first creating the server but it is good since
        there is now a physical force making me want to drink water..
      </TextDescription>

    </ProjectPage>
  )
}

export default WatRe