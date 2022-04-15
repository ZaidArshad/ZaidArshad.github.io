import './styles.css';
import '../../App.css';
import { colorToRgba } from 'react-spring/node_modules/@react-spring/shared';

interface Props {
    fontSize?: string;
    primaryColor?: string;
    secondaryColor?: string;
}


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