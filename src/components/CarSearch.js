import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store/slices/carsSlice"

export default function CarSearch() {
  const dispatch = useDispatch()
  const {searchTerm} = useSelector((state) => {
    return state.cars
  })

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (<div className="list-header">
    <h3 className="is-3">My cars</h3>
    <div className="search field is-horizontal">
      <label className="label">Search</label>
      <input
        className="input"
        value={searchTerm}
        onChange={handleSearchTermChange} />
    </div>
  </div>)
}