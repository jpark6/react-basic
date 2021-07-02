export default function Control(props) {
  const styles = {
    div: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '10px',
      padding: '10px 0',
      maxWidth: '600px',
    },
    btn: {
      borderRadius: 0,
      borderWidth: '1px'
    }
  }
  return (
    <div style={styles.div}>
      <button
        style={styles.btn}
        className="ant-btn ant-btn-lg ant-btn-primary"
        onClick={ ()=>props.onChangeMode('create') }
      >
        Create
      </button>
      <button
        style={styles.btn}
        className="ant-btn ant-btn-lg ant-btn-info"
        onClick={ ()=>props.onChangeMode('change') }
      >
        update
      </button>
      <button
        style={styles.btn}
        className="ant-btn ant-btn-lg ant-btn-danger"
        onClick={ ()=>props.onChangeMode('delete') }
      >
        delete
      </button>
    </div>
  )
}