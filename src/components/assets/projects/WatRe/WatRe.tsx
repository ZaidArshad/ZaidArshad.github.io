import React from 'react'
import PopText from '../../../PopText/PopText'
import './styles.css'

interface Props {
  primaryColor: string,
  secondaryColor: string,
}

const WatRe:React.FC<Props> = ({primaryColor, secondaryColor}) => {
  window.scrollTo(0, 0);
  return (
    <div className='webpage'>
        <div className='sticky'>
          <PopText primaryColor={primaryColor} secondaryColor={secondaryColor} >
            WatRe
          </PopText>
        </div>

        <div className='text-area'>
          <h2> Project by Zaid Arshad. Developed from June to August 2020 </h2>

          <div>
            <h1>Description</h1>
            <p>
              WatRe is an Android application coded in Java that makes use of notifications to remind the user to drink water.
            </p>
          </div>

          <div>
            <h1>Experience</h1>
            <p>
              This was the first major Android project I worked on. I made this application
              for myself as I did poorly staying hydrated. The objective of this application
              is to remind myself to drink water periodically throughout the day with daily and hourly notifications.
            </p>
          </div>

          <div>
            <h1>APK</h1>
            <p>
              The APK for this app can be found under the &nbsp; 
              <a href="https://github.com/ZaidArshad/WatRe/releases/tag/v1.0.0">
                releases 
              </a>
              &nbsp; tab on this repository.
            </p>
          </div>

          <div className='text-img'>
            <div>
              <h1>
                Daily Reminder
              </h1>
              <p>
                The user will be greeted every morning with a reminder to start drinking water.
                This notification cannot be closed unless the user opens the app. While this may
                be an aggressive approach, it will prevent them from being lazy and guilt them into drinking more water.
              </p>
            </div>
            <img className='img' alt='' src="https://user-images.githubusercontent.com/52565263/144075313-7e71d7c7-eb6e-4b89-97ab-e19fe4f694eb.png"/>
          </div>
        </div>
    </div>
  )
}

export default WatRe