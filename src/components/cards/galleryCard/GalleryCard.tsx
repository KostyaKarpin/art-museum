import { Painting } from "@/types/PaintingTypes";
import { DataWrapper, InfoWrapper, Wrapper } from "./GalleryCardStyles";
import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";
import useGetImageURL from "@/hooks/useGetImageURL";
import { Text } from "@/globalStyles/TextStyles";
import { textCut } from "@/utils/textCut";
import { TEXT_ORANGE } from "@/constants/colors";
import FavButton from "@/components/buttons/favorites/FavButton";

interface Props {
  painting: Painting;
}
const GalleryCard = (props: Props) => {
  const { id, image_id, title, artist_title, is_public_domain } =
    props.painting;
  const imageURL = useGetImageURL(image_id);

  return (
    <Wrapper>
      <ImageWrapper width={"400px"} height={"400px"}>
        <Link to={`/about/:${id}`}>
          <Image src={imageURL} />
        </Link>
      </ImageWrapper>
      <DataWrapper>
        <InfoWrapper>
          <Text $weight={500} $size={"18px"}>
            {textCut(title, 11)}
          </Text>
          <Text color={TEXT_ORANGE}>{artist_title}</Text>
          <Text $weight={700} $margin={"5% 0 0 0"}>
            {is_public_domain ? "Public" : "Private"}
          </Text>
        </InfoWrapper>
        <FavButton painting={props.painting} />
      </DataWrapper>
    </Wrapper>
  );
};

export default GalleryCard;
