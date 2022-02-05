export default function ValidationBox (props) {
  const okayBtnHandler = () => {
    props.onOkayBtn()
  }

  console.log(props)

  return (
    <div className='absolute flex items-center justify-center min-w-full min-h-screen'>
      <div className='bg-white w-2/4 rounded-lg overflow-hidden pb-4 text-2xl z-20'>
        <div className='px-5 py-4 bg-[#4C0B56] text-white text-4xl font-semibold'>
          Invalid Input
        </div>
        <div className='px-5 py-10 h-40 font-semibold'>{props.msgToDisplay}</div>
        <div className='px-5'>
          <button
            className='bg-[#4C0B56] text-white float-right px-10 py-3 hover:bg-[#8d17a0] transition-all duration-200'
            onClick={okayBtnHandler}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
