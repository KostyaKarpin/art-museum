import { Image } from "@/globalStyles/ImageStlyes";
import {
  BurgerMenu,
  Navigation,
  NavItem,
  NavLink,
  NavList,
} from "./NavBarStyles";
import HomeIcon from "@/assets/images/home-icon.svg";
import BookMarkIcon from "@/assets/images/bookmark-icon.svg";
import MenuIcon from "@/assets/images/burger-menu-icon.svg";
import { useState } from "react";
import Menu from "./menu/Menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navigation>
      <BurgerMenu src={MenuIcon} onClick={() => setMenuOpen(!menuOpen)} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <NavList>
        <NavItem>
          <Image src={HomeIcon} width={"24px"} />
          <NavLink to={"/"}>Home</NavLink>
        </NavItem>
        <NavItem>
          <Image src={BookMarkIcon} width={"24px"} />
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

export default NavBar;
