import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import { Wrapper } from "./LoadingStyles";
import MuseumLogo from "@images/museum-logo2.svg";
import { memo } from "react";

const Loading = () => {
  return (
    <Wrapper>
      <ImageWrapper width={"40%"}>
        <Image src={MuseumLogo} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default memo(Loading);
