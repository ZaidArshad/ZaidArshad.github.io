import React from 'react'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'
import Page, { PageProps } from '../Page/Page'


const Safe: React.FC<PageProps> = ({ page }) => {
  return (
    <Page page={page} >
      <h2> Software Developer Intern from September 2022 - April 2023 </h2>

      <TextImg
        title='Introduction'
        imgSrc='files/safe/safesoftware.svg'>
        At Safe Software, I was a part of the CAD, modelling and database team, a sub-team
        of the engine team. I worked on the company's main product Feature Manipulation Engine (FME).
        The work I did was mainly in C++ and a little bit of TCL. This was my first job so I learned
        how to use Jira and work in an agile environment. I also really honed my Visual Studio
        debugging skills to resolve tickets.
      </TextImg>

      <TextImg
        title='FME'
        imgSrc='files/safe/partial-run-and-preview.gif'>
        In short, FME is a database management system for people who don't need to know how to code.
        It's able to work with all types of file formats and transform their data. It's used
        heavily in the GIS industry as it can annotate models and maps very well across their
        vast quantity of formats.
      </TextImg>

      <TextDescription
        title='CMD Team'>
        On the CAD, modelling and database (CMD) team, I felt like I was a junior software developer
        instead of an intern as I was working on the same issues that my peers were. I contributed
        heavily to our Esri and Autodesk readers and writers, specifically Autodesk Revit integration.
        Revit is Autodesk's BIM software that is mainly used by architects, engineers and builders.
        A diverse variety of infrastructure goes into the construction of a building that I have to
        make sure that we support within FME's readers and writers For example, I had to guarantee
        that pipes, electrical and HVAC weren't lost in the model when we roundtrip read and write
        the same model. On the database side of things, I worked on extending our support for Oracle,
        SQL, SQL server, DB2, and other database reading and writing.
      </TextDescription>

      <TextDescription
        title='Debugging'>
        Working on such a large software system like FME, I had to fix a lot of bugs.
        I learned how to configure Visual Studio projects to allow us to debug the application
        line by line. I made use of the performance profiler built into VS to track down
        performance regressions and memory leaks. My Git skills improved as I learned to track
        down commits that introduced bugs from other developers.I also learned how to reproduce bugs
        reported by clients and made sure to simplify their submitted workspaces in
        order to narrow down the code paths the application will take.
      </TextDescription>

    </Page>
  )
}

export default Safe