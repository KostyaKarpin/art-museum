import { Image, ImageWrapper } from "@/globalStyles/ImageStlyes";
import { Wrapper } from "./FooterStyles";
import Logo from "@/assets/images/museum-logo2.svg";
import CompanyLogo from "@/assets/images/modsen-logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <ImageWrapper width={"200px"}>
        <Image src={Logo} />
      </ImageWrapper>
      <ImageWrapper width={"200px"}>
        <Image src={CompanyLogo} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Footer;
