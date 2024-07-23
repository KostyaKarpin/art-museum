import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import { Wrapper } from "./LoadingStyles";
import MuseumLogo from "@/assets/images/museum-logo2.svg";

const Loading = () => {
  return (
    <Wrapper>
      <ImageWrapper width={"40%"}>
        <Image src={MuseumLogo} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Loading;
