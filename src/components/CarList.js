import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store/slices/carsSlice"

export default function CarList() {
  const dispatch = useDispatch()
  const { cars, name } = useSelector(({ cars: { data, searchTerm }, form: { name } }) => {
    return {
      cars: data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())),
      name
    }
  })

  const handleCarDelete = (carId) => {
    dispatch(removeCar(carId))
  }

  const rendredCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

    return <div key={car.id} className={`panel ${bold && 'bold'}`}>
      <p>{car.name} - ${car.cost}
      </p>
      <button className="button is-danger" onClick={() => handleCarDelete(car.id)}>Delete</button>
    </div>
  })
  return <div className="car-list">{rendredCars} <hr /></div>
}