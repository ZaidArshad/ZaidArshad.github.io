import React from 'react'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'
import Page, { PageProps } from '../Page/Page'


const Sony: React.FC<PageProps> = ({ page }) => {
  return (
    <Page page={page}>
      <h2> Full Stack Developer Intern from Jan 2024 - August 2024 </h2>

      <TextImg title='Introduction'
        imgSrc='files/sony/spiderman-spot.png'>
        At Imageworks, I started on the Apps team then moved to the Web team once
        there was an opportunity to start my own project. On the Apps team I
        worked on maintaining our Academy Award winning review software ItView
        with Qt and Python. On the Web team I worked with the Spider-Verse team
        to create a feedback tool with Angular, Typescript, Python and Flask.
      </TextImg>

      <TextImg title='Imageworks'
        className='img-text'
        imgSrc='files/sony/kpop.gif'>
        Sony Pictures Imageworks is the VFX and animation branch of Sony Pictures.
        While I was there movies like Minecraft, KPOP: Demon Hunters and the next
        Spider-Verse movie were in production. I was there right after the 2023
        writers strike so money was tight and some projects were unfortunately canceled.
      </TextImg>

      <TextDescription title='Apps Team'>
        I initially started on the Apps team where I worked on ItView which is
        a video player used studio wide to review artist shots. It was written in
        Python and used PyQt as its interface. There are many plugins for the
        program that are used in different productions. My first task was to
        improve the usability of the program with a tablet via the tablet plugin.
        Brush sizes to draw on frames were buttons so I converted it to a logarithmic
        slider to allow a better experience for tablet users. As my term went along,
        I fixed more issues and completed feature requests from productions. The most
        complicated task I completed was to overhaul the playlist saving mechanism
        as it was unclear where files were saved. Doing a “save as” would cause
        state issues with a regular “save” and auto save. I improved usability
        by providing a location on the hotbar of where the file would be saved.
        I refactored to make it clear how saving would work in the code to limit
        unnecessary saving and overwriting of work.
      </TextDescription>

      <TextImg title='Web team'
        imgSrc='files/sony/spider-poster.jpg'>
        On the Web team I worked with the Spider-Verse team to create a feedback tool.
        The tool is similar to a forum but it could attach conversations to assets.
        The frontend was created using Angular and could be opened as a desktop
        app using Electron. The backend pulls from the studio's production database
        to allow users to comment on shots, models, environments and other types of
        assets. The catalyst for this project was that the rigging team for Spider-Man
        Across the Spider-Verse used to pass feedback from the animation team through
        a Google Sheets spreadsheet. This was problematic as the Chrome tab would often
        crash due to memory issues caused by too much data. I really wonder how some
        of these generationally defining movies make it to the theaters. The tool I
        made hooks up to the studio's database and connects conversations to actual
        assets in the file system. In the case of rigging, you would be able to
        see the internal status of your model as you receive feedback on it from
        your supervisor. Another issue is that you can't tell what has changed
        on the spreadsheet from the last time you opened it. I added a way to
        receive email notifications to posts that you have subscribed to or assets
        that you are working on. That way you won't miss a piece of communication
        in the sea of information. I showcased my project to the studio's department
        heads to gain insightful feedback and necessary visibility. The project
        would be useless if no one knew about it!
      </TextImg>

    </Page>
  )
}

export default Sony