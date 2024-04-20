import CarItem from "../CarItem/CarItem";

import {List} from "./CarsList.styled"


const CarsList = ({cars}) => {
  return (
      <List>
      {cars.length>0 && cars.map((item) => {
        return <CarItem key={item._id} data={item} />
      })}
      </List>
  )
}

export default CarsList