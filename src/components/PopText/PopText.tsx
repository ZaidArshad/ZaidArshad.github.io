import './styles.css';
import '../../App.css';

interface Props {
    className: string;
    text: string;
}

const PopText: React.FC<Props> = ({className, text}) => {
  return (
      <div>
          <div className={className + '-back poptext-back'}>
              {text}
              <div className={className + '-front poptext-front'}>
                  {text}
              </div>
          </div>
      </div>
  )
}

export default PopText