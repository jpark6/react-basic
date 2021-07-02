
/**
 * @param {Object} props - 콘텐츠 props
 * @param {String} props.title - 콘텐츠 제목
 * @param {String} props.desc - 콘텐츠 설명
 * @returns {JSX.Element}
 * @param {function(content:{title:string, desc:string}):void} props.onSubmit
 * @constructor
 */
export default function CreateContent(props) {
  const styles = {
    label: {
      display: 'block',
      height: '30px',
    },
    input: {
      border: '1px solid #ccc',
      width: '100%',
      maxWidth: '600px',
      marginBottom: '10px',
    }
  }
  /**
   * 컨텐츠 추가 이벤트 함수
   * @param {FormEvent<HTMLFormElement>} e - 폼 submit 이벤트
   */
  const submitContent = (e)=> {
    e.preventDefault()
    if(e.target.length < 2) {
      return
    }
    const title = e.target[0].value
    const desc = e.target[1].value

    if(!title || title===""){
      alert("제목을 입력하세요")
      return
    }

    if(!desc || desc===""){
      alert("내용을 입력하세요")
      return
    }
    props.onSubmit({title: title, desc: desc})
 }

  return (
    <article id={props.title.toLowerCase()}>
    <h2>Create</h2>
    <form onSubmit={submitContent}
      className="ant-form ant-form-horizontal"
      >
        <label htmlFor="contentTitle" className="ant-form-item-label">제목</label>
        <input id="contentTitle" style={styles.input} type="text" placeholder="title" />
        <label htmlFor="contentDescription" className="ant-form-item-label">설명</label>
        <textarea id="contentDescription" style={styles.input} className="ant-form-item-control-input"  placeholder="description" cols="30" rows="3" />
        <button className="ant-btn ant-btn-lg ant-btn-primary">Submit</button>
      </form>
    </article>
  )
}

