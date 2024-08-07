import { Painting } from "@/types/PaintingTypes";
import FavButton from "@/components/buttons/favorites/FavButton";
import {
  DataWrapper,
  TextWrapper,
  Wrapper,
  PaintingLink,
} from "./PaintingCardStyles";
import { Text } from "@/globalStyles/TextStyles";
import { LIGHT_ORANGE } from "@/constants/colors";
import { textCut } from "@/utils/textCut";
import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import useGetImageURL from "@/hooks/useGetImageURL";

type Props = {
  painting: Painting;
};

const PaintingCard = (props: Props) => {
  const imageURL = useGetImageURL(props.painting.image_id);
  return (
    <Wrapper>
      <PaintingLink to={`/about/:${props.painting.id}`}>
        <DataWrapper>
          <ImageWrapper width={"90px"} height={"90px"}>
            <Image src={imageURL} />
          </ImageWrapper>
          <TextWrapper>
            <Text $size={"17px"}>{textCut(props.painting.title, 11)}</Text>
            <Text color={LIGHT_ORANGE} $margin={"5% 0 0 0"}>
              {textCut(props.painting.artist_title, 11)}
            </Text>
            <Text $weight={700} $margin={"15% 0 0 0"}>
              {props.painting.is_public_domain ? "Public" : "Private"}
            </Text>
          </TextWrapper>
        </DataWrapper>
      </PaintingLink>
      <FavButton painting={props.painting} />
    </Wrapper>
  );
};

export default PaintingCard;
