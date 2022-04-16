import './styles.css';

interface Props {
    title: string;
    imgSrc: string;
    imgClass?: string;
    className?: string;
}

const TextImg:React.FC<Props> = (props) => {
  return (
    <div className={props.className + ' section'}>
        <div>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.children}
            </p>
        </div>
        <img className={props.imgClass} alt='' src={props.imgSrc}/>
    </div>
  )
}

TextImg.defaultProps = {
    className: 'text-img',
    imgClass: 'img'
}

export default TextImg