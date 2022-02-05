export default function ValidationModal (props) {
  const okayBtnHandler = () => {
    props.onOkayBtn()
  }

  return (
    <div
      className='min-h-full min-w-full bg-[rgba(0,0,0,0.5)] z-10 absolute flex items-center justify-center'
      onClick={okayBtnHandler}
    ></div>
  )
}
