/**
 * TOC : Table Of Content 목차
 * @param {Object} props - 콘텐츠 배열
 * @param {[{id:number, title:string, desc:string}]} props.contents - 콘텐츠 배열
 * @param {function(number):void} props.changeSelectedId - selected content id 변경
 * @returns {JSX.Element}
 * @constructor
 */
export default function TOC(props) {
  return (
    <nav>
      <ul>
        {
          props.contents.map((content) => (
            <li key={content.id}>
              <a href={"#" +content.title.toLowerCase()} onClick={(e)=> {
                e.preventDefault()
                props.changeSelectedId(content.id)
              }}>{content.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
