import './styles.css';
import '../../App.css';

interface Props {
    fontSize?: string;
    primaryColor?: string;
    secondaryColor?: string;
}

/**
 * Component for text with 3D effect 
 * @param fontSize Size of the font
 * @param primaryColor Outline stroke color
 * @param secondaryColor Fill of the front text
 * @returns 
 */
const PopText: React.FC<Props> = (props) => {
    const backStyle = {
        color: 'white',
        WebkitTextStrokeColor: (props.primaryColor !== undefined)? props.primaryColor: '#7C349E',
    };

    const frontStyle = {
        color: (props.secondaryColor !== undefined)? props.secondaryColor : '#600C88',
        WebkitTextStrokeColor: (props.primaryColor !== undefined)? props.primaryColor: '#7C349E',
    };

  return (
      <div>
          <div className={'poptext-back'} style={backStyle}>
              {props.children}              
              <div className={'poptext-front'} style={frontStyle}>
                  {props.children}
              </div>
          </div>
      </div>
  )
}


export default PopText
