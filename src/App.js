import {useState} from "react";
import './App.css'
import Subject from "./Components/Subject"
import TOC from "./Components/TOC"
import ReadContent from "./Components/ReadContent"
import Control from "./Components/Control"
import CreateContent from "./Components/CreateContent";

/**
 * App Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  const [data, setData] = useState({
    mode: 'read',
    selected_content_id: 1,
    subject: { title: 'Web', sub: '🙋‍♂️ Header!!!', },
    contents: [
      { id: 1, title: 'HTML', desc: 'HTML is for Information' },
      { id: 2, title: 'CSS', desc: 'CSS is for Style' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for Interactive' },
    ],
  })
  
  const [content, setContent] = useState(data.contents[0])
  let article
  /**
   * selected content id 변경
   * @param {number} id
   */
  const changeSelectedContent = (id) => {
    setContent(data.contents[id - 1])
  }

  /**
   * 모드 변경
   * @param {string} mode - 변경할 모드
   */
  const changeMode = (mode) => {
    setData({...data, mode: mode})
  }

  /**
   * 콘덴츠 추가
   * @param {Object} new_content - 신규 콘텐츠 - 신규 콘텐츠*
   * @param {number|undefined} new_content.id - 콘텐츠 id
   * @param {string} new_content.title - 콘텐츠 제목
   * @param {string} new_content.desc - 콘텐츠 설명
   */
  const addContent= (new_content) => {
    const contentArr = data.contents
    new_content.id = contentArr.length + 1
    contentArr.push(new_content)
    setData({...data, contents:contentArr, mode:'read'})
  }
  switch (data.mode) {
    case 'read':
      article = <ReadContent title={content.title} desc={content.desc} />
      break
    case 'create':
      article = <CreateContent title={content.title} desc={content.desc} onSubmit={addContent} />
      break
    default:
      article = <ReadContent title={content.title} desc={content.desc} />
  }
  
  return (
    <div className='App'>
      <Subject title={data.subject.title} sub={data.subject.sub} />
      <TOC contents={data.contents} changeSelectedContent={changeSelectedContent}/>
      <Control onChangeMode={changeMode}/>
      {article}
    </div>
  );
}