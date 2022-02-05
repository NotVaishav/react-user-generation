export default function Card (props) {
  const cardStyles = 'rounded-2xl shadow-lg px-5 py-4 ' + props.className

  return <div className={cardStyles}>{props.children}</div>
}
