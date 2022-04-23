interface Props {
    title: string;
}

/**
 * Block of text with a title
 * @param title Title of the description 
 * @returns React.FC
 */
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