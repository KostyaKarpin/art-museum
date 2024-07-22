import { Image } from "@/globalStyles/ImageStlyes";
import { Navigation, NavItem, NavLink, NavList } from "./NavBarStyles";
import HomeIcon from "@/assets/images/home-icon.svg";
import BookMarkIcon from "@/assets/images/bookmark-icon.svg";

const NavBar = () => {
  return (
    <Navigation>
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
