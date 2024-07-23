// eslint-disable-next-line import/namespace
import { useParams } from "react-router";
import useFetchByID from "@/hooks/useFetchByID";
import { Painting } from "@/types/PaintingTypes";
import { Info, InfoWrapper, Wrapper } from "./PaintingInfoStyles";
import { Text } from "@/globalStyles/TextStyles";
import { TEXT_ORANGE } from "@/constants/colors";
import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import useGetImageURL from "@/hooks/useGetImageURL";
import { useState } from "react";
import Loading from "../loading/Loading";

const PaintingInfo = () => {
  const [loading, isLoading] = useState(true);
  const { id } = useParams();
  const data: Painting | undefined = useFetchByID(id!, isLoading);
  const imageURL = useGetImageURL(data?.image_id);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <ImageWrapper width={"50%"} height={"100%"}>
            <Image src={imageURL} />
          </ImageWrapper>
          <InfoWrapper>
            <Info>
              <Text size={"32px"} $weight={400}>
                {data && data.title}
              </Text>
              <Text
                color={TEXT_ORANGE}
                size={"20px"}
                $weight={400}
                $margin={"5% 0 0 0"}
              >
                {data && data.artist_title}
              </Text>
              <Text $weight={700} $margin={"3% 0 0 0"}>
                {data && data.date_display}
              </Text>
            </Info>
            <Info>
              <Text size={"32px"} $margin={"0 0 5% 0"}>
                Overview
              </Text>
              <Text $weight={400}>
                Artist nationality: {data && data.artist_display}
              </Text>
              <Text $weight={400} $margin={"3% 0 0 0"}>
                Dimensions Sheet: {data && data.dimensions}
              </Text>
              <Text $weight={400} $margin={"3% 0 0 0"}>
                Credit Line: {data && data.credit_line}
              </Text>
              <Text $weight={700} $margin={"3% 0 0 0"}>
                {data && data.is_public_domain ? "Public" : "Private"}
              </Text>
            </Info>
          </InfoWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default PaintingInfo;
