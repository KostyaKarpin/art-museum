import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import { Wrapper } from "./HeaderStyles";
import Logo from "@/assets/images/museum-logo.svg";
import NavBar from "../navBar/NavBar";

const Header = () => {
  return (
    <Wrapper>
      <ImageWrapper width={"200px"}>
        <Image src={Logo} />
      </ImageWrapper>
      <NavBar />
    </Wrapper>
  );
};

export default Header;
