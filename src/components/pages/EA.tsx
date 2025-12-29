import React from 'react'
import TextDescription from '../TextDescription/TextDescription'
import TextImg from '../TextImg/TextImg'
import Page, { PageProps } from '../Page/Page'


const EA: React.FC<PageProps> = ({ page }) => {
  return (
    <Page page={page} >
      <h2> Software Engineer Intern from May 2025 - August 2025 </h2>

      <TextImg title='Introduction'
        imgSrc='files/ea/respawn.svg'>
        I worked on Apex Legends at Respawn Entertainment
        on the Shared Tools team. I developed tools that helped
        the game continue to be iterated upon. The first tool
        I worked on was Respawn's Art Asset Manager in C#.
        The other significant tool I extended was Apex Legends'
        binary packer in C++.
      </TextImg>

      <TextImg title='Respawn Art Asset Manager'
        imgSrc='files/ea/apex-legends.jpg'>
        The Respawn Art Asset Manager (RAAM) interfaces with another internal
        tool to create game binaries from our assets. This way we don't need
        to manually work with our binary compiler to change specific parts
        of assets. The part I worked on has automation for content managers
        to produce battlepasses or in game events faster. I used C# and WPF
        to extend and fix current implementations where I worked through a
        backlog of issues. I took on tasks like making sure our binary compiler
        was getting the right values, fixing UI inconsistencies, having fields
        depend on other fields and removing dead features. I needed to requirement
        gather to get more context from content managers because the Jira tickets
        were quite bare. I was also responsible for releasing my changes to the
        production version with some patch notes to give visibility on what changed.
      </TextImg>

      <TextDescription title='Binary Packer'>
        I was tasked with adding telemetry to Apex Legends' binary packer. It was written
        a long time ago in C++ for previous games that use the same game engine. It was
        initially written by a single developer so it was difficult to jump into the
        code because of the monolithic design and lack of object oriented programming.
        The reason we needed to have telemetry was because the binary packer would fail
        without reason and the best way to fix it was to delete all binaries and try again.
        I went into the code and added breadcrumbs to help us track problems like command
        line arguments, how files were packed, elapsed time, errors, etc. We have a
        studio wide system that lets us upload telemetry that allows us to measure our metrics.
        This tool needed to run as efficiently as possible as it would process hundreds of
        thousands of files and if broken could prevent us from creating game updates. In order
        to upload the generated telemetry I came up with the approach of running it on a
        separate process. The upload program was written in Python as we already had the
        libraries to handle telemetry upload. I had to coordinate with the build team to
        understand how this could be implemented in the current build pipeline. This encapsulates
        the telemetry upload from the game building pipeline where if the upload fails the
        system can still proceed. This also improves efficiency as we can upload the telemetry
        in parallel to other build processes.
      </TextDescription>



    </Page>
  )
}

export default EA