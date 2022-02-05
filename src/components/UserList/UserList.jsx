import Card from '../../UI/Card'
import UserItem from './helpers/UserItem'

export default function UserList (props) {
  return (
    <Card className='bg-white'>
      {props.elemData.length === 0 ? (
        <div className='text-center text-2xl font-semibold'>
          No Items to display
        </div>
      ) : (
        <ul>
          {props.elemData.map(elem => (
            <UserItem key={elem.id} username={elem.username} age={elem.age} />
          ))}
        </ul>
      )}
    </Card>
  )
}
