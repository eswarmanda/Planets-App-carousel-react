import './index.css'

const PlanetItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails
  return (
    <div className="list-ele">
      <img className="img-size" src={imageUrl} alt={`planet ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}
export default PlanetItem
