import ValidationBox from './helpers/ValidationBox'
import ValidationModal from './helpers/ValidationModal'

export default function Validation (props) {
  const okayBtnHandler = () => {
    props.onErrorValidation()
  }
  return (
    <>
      <ValidationModal onOkayBtn={okayBtnHandler}></ValidationModal>
      <ValidationBox onOkayBtn={okayBtnHandler} msgToDisplay={props.msgToDisplay}/>
    </>
  )
}
