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
    subject: { title: 'Web', sub: '🙋‍♂️ Header!!!', },
    toc: [
      { id: 1, title: 'HTML', desc: 'HTML is for Information' },
      { id: 2, title: 'CSS', desc: 'CSS is for Style' },
      { id: 3, title: 'JavaScript', desc: 'JavaScript is for Interactive' },
    ],
  })
  
  const addTOC = (new_toc) => {
    const tocArr = data.toc
    new_toc.id = tocArr.length + 1
    tocArr.push(new_toc)
    setData({...data, contents:tocArr})
  }
  
  useEffect(()=> {
    addTOC({ title: 'Markdown', desc: 'Markdown is for Document' })
    console.log(data)
  }, [])
  
  return (
    <div className="App">
      <Subject title={data.subject.title} sub={data.subject.sub} />
      <Subject title="React" sub="Awesome"/>
      <TOC contents={data.toc}/>
      <Content title="HTML" desc="HTML is HyperText Markup Language."/>
      <Content title="CSS" desc="CSS is Cascading Style Sheet"/>
      <Content title="JavaScript" desc="JavaScript is Awesome"/>
    </div>
  );
}