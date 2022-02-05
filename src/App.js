import { useState } from 'react'
import User from './components/User/User'
import MainBody from './UI/MainBody'
import Validation from './components/Validation/Validation'
import UserList from './components/UserList/UserList'

const DUMMY_USERS = [
  // { id: 1, username: 'kosha', age: 10 },
  // { id: 2, username: 'vaishav', age: 20 }
]



function App () {
  const [isModal, setModal] = useState(false)
  const [msgText, setMsgText] = useState('')
  const [userData, setUserData] = useState(DUMMY_USERS)

  const lenOfUserData = userData.length

  const errorModalHandler = msg => {
    setMsgText(msg)
    setModal(prevState => !prevState)
  }

  const resetModalHandler = () => {
    setModal(prevState => !prevState)
  }

  const addUserData = newUserData => {
    const updatedUserData = { id: lenOfUserData + 1, ...newUserData }
    setUserData(prevState => [updatedUserData, ...prevState])
  }

  return (
    <div className='App'>
      {isModal && (
        <Validation
          onErrorValidation={resetModalHandler}
          msgToDisplay={msgText}
        />
      )}
      <MainBody>
        <User
          onErrorValidation={errorModalHandler}
          onSuccessHandler={addUserData}
        />
        <UserList elemData={userData}></UserList>
      </MainBody>
    </div>
  )
}

export default App
