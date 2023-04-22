import './index.css'

const CardItem = props => {
  const {eachItem} = props
  const {title, description, imgUrl, className} = eachItem

  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="image">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}
export default CardItem
