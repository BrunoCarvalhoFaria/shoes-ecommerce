
const ReturnSizeAvaible = (props) => {
  return (
  <li className='size'>
  <input name={`shoesSize ${props.id}`} type='radio' id={`${props.size} ${props.id}`}/>
  <label htmlFor={`${props.size} ${props.id}`}>{props.size}</label>
  </li>
  )
}

export default ReturnSizeAvaible