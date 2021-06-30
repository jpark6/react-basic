/**
 * TOC : Table Of Content 목차
 * @returns {JSX.Element}
 * @constructor
 */
export default function TOC() {
  const contents = ['HTML', 'CSS', 'JavaScript']
  return (
    <nav>
      <ul>
        {
          contents.map((content) => (
            <li key={content}>
              <a href={"#" +content.toLowerCase()}>{content}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
