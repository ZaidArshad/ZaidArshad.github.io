import './styles.css';

interface Props {
    title: string;
    imgSrc: string;
    imgClass?: string;
    className?: string;
    borderRadius?: string;
}

const TextImg:React.FC<Props> = (props) => {
    const divClass:string = props.className === 'center' ?  'center' : 'text-img-text';
  return (
    <div className={props.className + ' section'}>
        <div className={divClass}>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.children}
            </p>
        </div>
        <img className={props.imgClass} alt='' src={props.imgSrc} style={{borderRadius:props.borderRadius}}/>
    </div>
  )
}

TextImg.defaultProps = {
    className: 'text-img',
    imgClass: 'img',
}

export default TextImg