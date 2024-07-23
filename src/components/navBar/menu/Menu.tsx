// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";
import { Wrapper } from "./MenuStyles";
import { BurgerMenu } from "../NavBarStyles";
import CrossIcon from "@/assets/images/cross-menu-icon.svg";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Menu = (props: Props) => {
  const { open, setOpen } = props;
  return (
    <Wrapper open={open}>
      <BurgerMenu src={CrossIcon} onClick={() => setOpen(!open)} />
      <Link to={"/"} onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link to={"/favorites"} onClick={() => setOpen(false)}>
        Favorites
      </Link>
    </Wrapper>
  );
};

export default Menu;
