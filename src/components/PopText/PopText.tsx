import './styles.css';
import '../../App.css';
import CSS from 'csstype';

interface Props {
    text: string;
    priColour: string;
    secColour: string;
    fSize: string;
}

const PopText: React.FC<Props> = ({text, priColour, secColour, fSize}) => {
    const backStyle: CSS.Properties = {
        color: getComputedStyle(document.documentElement).getPropertyValue("--background"),
        fontSize: fSize,
        WebkitTextStrokeColor: secColour
    }
    const frontStyle: CSS.Properties = {
        color: priColour,
        fontSize: fSize,
        WebkitTextStrokeColor: secColour
    }

  return (
      <div>
          <div style={backStyle} className={'poptext-back'}>
              {text}
              <div style={frontStyle} className={'poptext-front'}>
                  {text}
              </div>
          </div>
      </div>
  )
}

export default PopText