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
  return (
    <div className="App">
      <Subject title="Web" sub="Header!!"/>
      <Subject title="React" sub="Awesome"/>
      <TOC />
      <Content title="HTML" desc="HTML is HyperText Markup Language."/>
      <Content title="CSS" desc="CSS is Cascading Style Sheet"/>
      <Content title="JavaScript" desc="JavaScript is Awesome"/>
    </div>
  );
}