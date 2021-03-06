import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'
import './styles.css'

const DuckHunt:React.FC<ProjectProps> = ({project}) => {
  return (
    <ProjectPage project={project} gitBG={project.secondaryColor}>
        <h2> Hackathon Project by Zaid Arshad & Daniel Nguyen - Developed on February 12 2022. </h2>

        <div className='collage-phone'>
          <img src="files/duckhunt/ss1.png" alt='screenshot 1'/>
          <img src="files/duckhunt/ss2.png" alt='screenshot 2'/>
          <img src="files/duckhunt/ss3.png" alt='screenshot 3'/>
        </div>

        <TextDescription title='Inspiration'>
          We wanted to practise working with APIs and data retrieval.
          We drew inspiration from the Transit app as it incorporates
          a list and a map very well.
        </TextDescription>

        <TextDescription title='What it Does'>
          This app is meant to help you keep track of where you
          have seen ducks and where you can go to potentially
          see ducks. You can click on the list to get directions to the clicked duck.
        </TextDescription>

        <TextDescription title='How we Built it'>
          We used Android Studio, Kotlin and the google maps api to make the app.
          We specifically used the maps sdk for geo-location, places api for details
          of specific places, and directions api for directions to clicked places.
        </TextDescription>

        <TextDescription title='Challenges we Ran Into'>
          We had performance problems because we were making
          too many calls to the api and struggled to keep the interface updating in real time. 
        </TextDescription>

        <TextDescription title="Accomplishments That we're Proud of">
          We were happy that we were able to process the mass
          amount of information needed to make this happen.
        </TextDescription>

        <TextDescription title="What we Learned">
          We learned about differents kinds of APIs
          and their usefulness to our project.
        </TextDescription>

        <TextDescription title="What's Next for Duck Hunt">
          We wish we had more time to polish it and make it
          more responsive but are happy with the result regardless.
        </TextDescription>

        <TextDescription title="Assets Used">
          <a href="https://4vector.com/i/free-vector-ducky-clip-art_118391_Ducky_clip_art_hight.png">Ducky</a>
          <br/>
          <a href="https://www.emojimeanings.org/duck/">Circle Duck Icon</a>
          <br/>
          <a href="https://cascadeseasttransit.com/wp-content/uploads/2017/10/transit-app-gray.png ">Transit icon</a>
        </TextDescription>

        <TextDescription title="Resources Used">
          <a href="https://developers.google.com/maps/documentation/places/web-service/search">Getting names of nearby places</a>
          <br/>
          <a href="https://medium.com/android-news/google-maps-directions-api-5b2e11dee9b0 ">Google Maps Directions API (route from 1 lat,lng to another)</a>
          <br/>
          <a href="https://lwgmnz.me/2018/09/20/google-maps-and-directions-api-using-kotlin/">Kotlin Implementation:</a>
        </TextDescription>


        <TextImg
          title='Demo Video'
          className='center'
          imgSrc=''>
          <video className='video-phone'
              src='files/duckhunt/demo-video.mp4' controls/>
        </TextImg>

    </ProjectPage>
  )
}

export default DuckHunt