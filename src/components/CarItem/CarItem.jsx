import { Button, ItemWrapper, ImageWrapper, ContentWrapper, ContentHeader, ContentFavourite, Description, Categories, Category} from "./CarItem.styled"
import { ContentExtraInfo, Reviews } from "../reuse/CommonStyles.styled"

const CarItem = () => {
  return (
    <ItemWrapper>
        <ImageWrapper>
            <img src="" alt="car" />
        </ImageWrapper>
          <ContentWrapper>
              <div>
                   <ContentHeader>
                      <h2>Mavericks</h2>
                      <ContentFavourite>
                          <p>€8000.00</p>
                          <button>fav</button>
                      </ContentFavourite>
                  </ContentHeader>
                  <ContentExtraInfo>
                      <Reviews>4.4(2 Reviews)</Reviews>
                      <p>Kyiv, Ukraine</p>
                  </ContentExtraInfo>
              </div>
                  <Description>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads.</Description>
                  <Categories>
                    <Category>2 adults</Category>
                    <Category>Automatic</Category>
                  <Category>AC</Category>
                  <Category>2 adults</Category>
                    <Category>Automatic</Category>
                    <Category>AC</Category>
                  </Categories>
                  <Button type="button">Show more</Button>
        </ContentWrapper>
    </ItemWrapper>
  )
}

export default CarItem