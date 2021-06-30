
/**
 * @param {Object} props - 콘텐츠 props
 * @param {String} props.title - 콘텐츠 제목
 * @param {String} props.desc - 콘텐츠 설명
 * @returns {JSX.Element}
 * @constructor
 */
export default function Content(props) {
  return (
    <article id={props.title.toLowerCase()}>
      <h2>{props.title}</h2>
      {props.desc}
    </article>
  )
}

