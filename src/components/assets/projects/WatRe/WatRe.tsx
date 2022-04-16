import React from 'react'
import ProjectPage from '../../../ProjectPage/ProjectPage'
import TextDescription from '../../../TextDescription/TextDescription'
import TextImg from '../../../TextImg/TextImg'

interface Props {
  primaryColor: string,
  secondaryColor: string,
}

const WatRe:React.FC<Props> = ({primaryColor, secondaryColor}) => {
  // window.scrollTo(0, 0);
  return (
    <ProjectPage projectName='WatRe' primaryColor={primaryColor} secondaryColor={secondaryColor}>
      <h2> Project by Zaid Arshad. Developed from June to August 2020 </h2>

      <TextDescription title='Description'>
        WatRe is an Android application coded in Java that makes
        use of notifications to remind the user to drink water.
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
        className='text-img'
        imgClass='img'
        imgSrc='https://user-images.githubusercontent.com/52565263/144075313-7e71d7c7-eb6e-4b89-97ab-e19fe4f694eb.png'>
            The user will be greeted every morning with a reminder to start drinking water.
            This notification cannot be closed unless the user opens the app. While this may
            be an aggressive approach, it will prevent them from being lazy and guilt them into drinking more water.
      </TextImg>

      <TextImg
        title='Press the Button'
        className='img-text'
        imgClass='img-phone'
        imgSrc='https://user-images.githubusercontent.com/52565263/144077565-0c034af5-b99a-43d2-839c-382a3d8aaac1.gif'>
            Pressing the main water button will start a background process to
            remind you to drink water again in the next 1.5 hours. Once it is
            clicked it will turn grey showing that it is unclickable.
            It will also fill the bar representing how much water you have drank.
      </TextImg>
    </ProjectPage>
  )
}

export default WatRe