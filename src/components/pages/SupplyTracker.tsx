import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'

const SupplyTracker:React.FC<ProjectProps> = ({project}) => {
  return (
    <ProjectPage project={project} gitBG={'white'}>
        <h2> Project by Zaid Arshad - Developed from September to December 2021 </h2>

        <TextDescription title='Description'>
            Web Consumable Tracker is a 2 part project that makes up a native
            web client and web server programmed in Java. The client makes use
            of Java Swing to display a GUI and the server uses Spring Boot to process
            calls to the REST API. The objective of this project is to keep track
            of food stocks and their expiry. The server saves the list of consumables
            between executions and the client calls to the server to display those items.
        </TextDescription>

        <TextDescription title='Experience'>
            This project taught me how to use Spring Boot, Swing and Gson. While
            the GUI may be bland it comes out to be neat and easy to navigate.
            I don't usually showcase school projects on my personal GitHub but
            I thought that this taught me many different aspects of software development.
        </TextDescription>

        <TextImg
            title='Consumables'
            className='center'
            borderRadius='1vw'
            imgSrc='files/supplytracker/consumables.png'>
                All consumables are stored on the server and will display on the client as shown.
        </TextImg>

        <TextImg
            title='Scroll Bar'
            className='text-img'
            imgSrc='files/supplytracker/scroll-bar.gif'>
                The scroll bar will show when there is not enough space on the screen to show an item.
        </TextImg>

        <TextImg
            title='Separate Lists'
            className='img-text'
            imgSrc='files/supplytracker/separate-lists.gif'>
                The client has 4 different tabs to display food based on expiry.
        </TextImg>

        <TextImg
            title='Adding an item'
            className='text-img'
            imgSrc='files/supplytracker/adding-an-item.gif'>
                An item can be added with the add button at the bottom of the screen.
                A dialog will pop up asking for details of the consumable. The only field that can be left empty 
        </TextImg>

        <TextImg
            title='Removing an item'
            className='img-text'
            imgSrc='files/supplytracker/removing-an-item.gif'>
                An item can be removed by clicking the remove button.
        </TextImg>

        <TextDescription title='cURL Commands'>
            The server can be accessed in any terminal that has cURL. An example of
            an item being added:
            <br/><br/>
            curl -H "Content-Type: application/json" -X POST -d &#123;"type":1,
            "name":"Muffin", "notes":"", "price":5.0, "quantity":3.5, 
            "expiryDate":"2021-12-24T00:00"&#125; localhost:8080/addItem/food
            <br/><br/>
            while the server is running on a local machine. The escape key (\)
            may need to be used on the quotations depending on the operating system or terminal.
        </TextDescription>

    </ProjectPage>
  )
}

export default SupplyTracker