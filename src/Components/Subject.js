/**
 * @param {Object} props - Subject's props
 * @param {String} props.title - 제목
 * @param {String} props.sub - 설명
 * @param {function():void} props.changeMode - 모드 변경
 * @returns {JSX.Element}
 * @constructor
 */
export default function Subject(props) {
  return (
    <header>
      <h1><a href='/' onClick={(e)=> {
        e.preventDefault()
        props.changeMode()
      }}>{props.title}</a></h1>
      {props.sub}
    </header>
  )
}
