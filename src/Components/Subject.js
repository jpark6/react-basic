/**
 * @param {Object} props - Subject's props
 * @param {String} props.title - 제목
 * @param {String} props.sub - 설명
 * @returns {JSX.Element}
 * @constructor
 */
export default function Subject(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub}
    </header>
  )
}
