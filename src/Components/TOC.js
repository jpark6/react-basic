/**
 * TOC : Table Of Content 목차
 * @param {Object} props - 콘텐츠 배열
 * @param {[{id:number, title:string, desc:string}]} props.contents - 콘텐츠 배열
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
              <a href={"#" +content.title.toLowerCase()}>{content.title}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
