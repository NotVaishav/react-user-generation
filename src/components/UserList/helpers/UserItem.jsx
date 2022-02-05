export default function UserItem (props) {
  return (
    <li className=' border-2 border-gray-400 my-4 py-2 px-2 text-2xl font-semibold'>
      {props.username}
      {` (${props.age} years old)`}
    </li>
  )
}
