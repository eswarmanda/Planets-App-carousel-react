import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  }
  return (
    <div data-testid="planets" className="slider-container">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem itemDetails={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
