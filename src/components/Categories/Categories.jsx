import {CategoriesList, Category} from "./Categories.styled"
import icons from '../../assets/sprite.svg';

const Categories = ({ data, type}) => {
    console.log('Categories :>> ', data);
    const { kitchen, beds, airConditioner, CD, radio, hob, toilet, shower, freezer, water, gas, microwave,adults, transmission, engine, TV} = data;
    // const categoriesList = Object.entries(data).map(item => { return { [item[0]]: item[1], } });
   
  return (
      <CategoriesList type={type}>
          {adults ?<Category>
              <svg>
              <use href={`${icons}#Users`}></use>
            </svg>
              <span>{adults} adults</span>
          </Category>: <></>}
          {transmission ?<Category>
              <svg>
              <use href={`${icons}#automatic`}></use>
            </svg>
              <span>{transmission}</span>
          </Category>: <></>}
           {engine?<Category>
              <svg>
              <use href={`${icons}#station`}></use>
            </svg>
              <span>{engine}</span>
          </Category>: <></>}
          {kitchen ?<Category>
              <svg>
              <use href={`${icons}#kitchen`}></use>
            </svg>
              <span>kitchen</span>
          </Category>: <></>}
           {beds ?<Category>
              <svg>
              <use href={`${icons}#bed`}></use>
            </svg>
              <span>{beds} beds</span>
          </Category>: <></>}
          {toilet ?<Category>
              <svg>
              <use href={`${icons}#toilet`}></use>
            </svg>
              <span>toilet</span>
          </Category>: <></>}
          {shower ?<Category>
              <svg>
              <use href={`${icons}#shower`}></use>
            </svg>
              <span>shower</span>
          </Category>: <></>}
           {TV ?<Category>
              <svg>
              <use href={`${icons}#tv`}></use>
            </svg>
              <span>TV</span>
          </Category>: <></>}
          {CD ?<Category>
              <svg>
              <use href={`${icons}#cd`}></use>
            </svg>
              <span>CD</span>
          </Category>: <></>}
          {radio ?<Category>
              <svg>
              <use href={`${icons}#radio`}></use>
            </svg>
              <span>radio</span>
          </Category>: <></>}
           {hob ?<Category>
              <svg>
              <use href={`${icons}#hob`}></use>
            </svg>
              <span>{hob} hob</span>
          </Category>: <></>}
           {freezer ?<Category>
              <svg>
              <use href={`${icons}#freezer`}></use>
            </svg>
              <span>Freezer</span>
          </Category>: <></>}
           {gas ?<Category>
              <svg>
              <use href={`${icons}#gas`}></use>
            </svg>
              <span>gas</span>
          </Category>: <></>}
          {water ?<Category>
              <svg>
              <use href={`${icons}#water`}></use>
            </svg>
              <span>water</span>
          </Category>: <></>}
          {microwave ?<Category>
              <svg>
              <use href={`${icons}#micro`}></use>
            </svg>
              <span>microwave</span>
          </Category>: <></>}
           {airConditioner ?<Category>
              <svg>
              <use href={`${icons}#airConditioner`}></use>
            </svg>
              <span>{airConditioner} Air conditioner</span>
          </Category>: <></>}
    </CategoriesList>
  )
}

export default Categories