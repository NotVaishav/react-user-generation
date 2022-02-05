import { useState } from 'react'
import Card from '../../UI/Card'
import '../../index.css'

export default function User (props) {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')

  const userNameChangeHandler = e => {
    setUserName(e.target.value)
  }

  const userAgeChangeHandler = e => {
    setUserAge(parseInt(e.target.value))
  }

  const formSubmitHandler = e => {
    e.preventDefault()
    if (userName.trim() === '') {
      props.onErrorValidation('Please enter a valid name and age')
    } else if (userAge <= 0 || userAge === '') {
      props.onErrorValidation('Please enter a valid age ')
    } else {
      const newUserData = {
        username: userName,
        age: userAge
      }
      props.onSuccessHandler(newUserData)
      setUserName('')
      setUserAge('')
    }
  }

  return (
    <div className='py-10'>
      <Card className='bg-white'>
        <form onSubmit={formSubmitHandler}>
          <div className='form-options flex flex-col'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name='username'
              onChange={userNameChangeHandler}
              value={userName}
            />
          </div>
          <div className='form-options flex flex-col'>
            <label htmlFor='age'>Age (Years)</label>
            <input
              type='number'
              name='age'
              onChange={userAgeChangeHandler}
              value={userAge}
            />
          </div>
          <button
            className='bg-[#4C0B56] text-white px-7 py-3 text-2xl my-3 font-semibold hover:bg-[#8d17a0] transition-all duration-200'
            type='submit'
          >
            Add User
          </button>
        </form>
      </Card>
    </div>
  )
}
