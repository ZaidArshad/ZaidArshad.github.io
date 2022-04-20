import React from 'react'
import ProjectPage, { ProjectProps } from '../ProjectPage/ProjectPage'
import TextDescription from '../TextDescription/TextDescription'

const Gobblers:React.FC<ProjectProps> = ({primaryColor, secondaryColor}) => {
  return (
    <ProjectPage projectName='Gobblers' primaryColor={primaryColor} secondaryColor={secondaryColor}>
        <h2> Hackathon Project by Zaid Arshad, Daniel Nguyen & Devin Dang - Developed on November 27 2021. </h2>

        <TextDescription title='About'>
            SFU Gobbles is an android game coded in a java based around
            Tic-tac-toe and takes inspirtaion from the game Goblet Gobblers. 
            To play the game one must take a picture of 3 SFU students to act
            as tokens. There are 6 tokens (2 of a kind). Each token has its own
            value from 1-3. If a token has a higher value that another than it
            can overwrite it on the tic-tac-toe board. Whomever gets 3 tokens of their own
            in a row/column/diagonally (similar to tic-tac-toe) wins the game.
        </TextDescription>

        <TextDescription title='Build/Run Instructions'>
            Need android studio with mobile phone running android / android emulator
        </TextDescription>

        <TextDescription title='Us'>
            Names | SFU emails | Github <br/>
            Zaid Arshad | zaa10@sfu.ca | ZaidArshad <br/>
            Devin Dang | dda59@sfu.ca | devindang7 <br/>
            Daniel Nguyen | dvn1@sfu.ca | danielvnguyen <br/>
        </TextDescription>

        <TextDescription title='Wikipedia Path'>
            SFU -&gt; mod -&gt; video game -&gt; tic-tac-toe
        </TextDescription>

        <TextDescription title='References'>
        
            Game inspiration from boardgame "<a href="https://en.wikipedia.org/wiki/Gobblet">Gobblet Gobblers</a>" <br/>
            <a href="https://image.shutterstock.com/image-vector/hungry-emoticon-260nw-70876951.jpg">App icon</a> <br/>
            <a href="https://www.youtube.com/watch?v=h8y0JMVwdmM">Button sound</a> <br/>
            <a href="https://www.myinstants.com/instant/number-one-victory-royale-yeah-fortnite-we-bout-29836/">Victory sound</a> <br/>
            <a href="https://www.myinstants.com/instant/minecraft-eating-sound-39731/">Consume sound</a> <br/>
        </TextDescription>
    </ProjectPage>
  )
}

export default Gobblers