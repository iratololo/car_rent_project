import Categories from "../Categories/Categories"

import { Button, ItemWrapper, ImageWrapper, ContentWrapper, ContentHeader, ContentFavourite, Description, Image} from "./CarItem.styled"
import { ContentExtraInfo, Reviews } from "../reuse/CommonStyles.styled"

const CarItem = ({data}) => {
    // console.log('data :>> ', data);
    const { name, price, description, reviews, rating, location, adults, transmission, engine,gallery, details } = data;
    
  return (
    <ItemWrapper>
        <ImageWrapper>
            <Image src={gallery[0]} alt="car" />
        </ImageWrapper>
          <ContentWrapper>
              <div>
                   <ContentHeader>
                      <h2>{name}</h2>
                      <ContentFavourite>
                          <p>€{price.toFixed(2)}</p>
                          <button>fav</button>
                      </ContentFavourite>
                  </ContentHeader>
                  <ContentExtraInfo>
                      <Reviews>{rating}({reviews.length} Reviews)</Reviews>
                      <p>{location}</p>
                  </ContentExtraInfo>
              </div>
              <Description>{description}</Description>
              <Categories data={{ ...details, adults, transmission, engine }} type={"list"} />
                  <Button type="button">Show more</Button>
        </ContentWrapper>
    </ItemWrapper>
  )
}

export default CarItem