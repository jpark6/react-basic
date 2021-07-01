import {useState, useEffect} from "react";
import './App.css'
import Subject from "./Components/Subject"
import TOC from "./Components/TOC"
import Content from "./Components/Content"

/**
 * App Component
 * @returns {JSX.Element}
 * @constructor
 */
export default function App() {
  const [data, setData] = useState({
    mode: 'welcome',
    selected_content_id: 1,
    subject: { title: 'Web', sub: '🙋‍♂️ Header!!!', },
    welcome: { title: 'Welcome', sub: '🔆 Hello, React!!!'},
    contents: [
      { id: 1, title: 'HTML', desc: 'HTML is for Information' },
      { id: 2, title: 'CSS', desc: 'CSS is for Style' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for Interactive' },
    ],
    selected_content: { id: 0, title:'', desc: '' }
  })

  /**
   * mode 토글
   * welcome ↔️ subject️
   */
  const toggleMode = () => {
    setData({...data, mode: data.mode === 'welcome' ? 'subject' : 'welcome'})
  }

  /**
   * 새로운 콘텐츠 추가
   * @param {Object} new_content - 추가할 콘텐츠
   * @param {string} new_content.title - 콘텐츠 제목
   * @param {string} new_content.desc - 콘텐츠 설명
   * @param {number|undefined} new_content.id - 콘텐츠 설명
   */
  const addContent= (new_content) => {
    const contentArr = data.contents
    new_content.id = contentArr.length + 1
    contentArr.push(new_content)
    setData({...data, contents:contentArr})
  }

  /**
   * selected content id 변경
   * @param {number} id
   */
  const changeSelectedId = (id) => {
    setData({...data, selected_content_id: id})
  }

  
  const changeContent = () => {
    if(data.mode === 'welcome') {
      setData({...data, selected_content:{id:0, title: data.welcome.title, desc: data.welcome.sub}})
    } else if(data.mode === 'subject') {
      const selected_content = data.contents.filter((content) => (
        content.id === data.selected_content_id
      ))
      if(selected_content.length === 1) {
        setData({...data, selected_content:{id:0, title: selected_content[0].title, desc: selected_content[0].desc}})
      }
    }
  }
  
  useEffect(
    ()=> {
      changeContent()
    }, [data.mode, data.selected_content_id])
  

  return (
    <div className='App'>
      <Subject title={data.subject.title} sub={data.subject.sub} changeMode={toggleMode} />
      {data.mode === 'subject' && <TOC contents={data.contents} changeSelectedId={changeSelectedId}/>}
      <Content title={data.selected_content.title} desc={data.selected_content.desc} />
    </div>
  );
}