interface Props {
    title: string;
}

const TextDescription:React.FC<Props> = (props) => {
  return (
    <div className='section'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.children}
        </p>
    </div>
  )
}

export default TextDescription