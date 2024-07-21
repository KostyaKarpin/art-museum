import { Painting } from "@/types/PaintingTypes";
import FavButton from "./FavButton";
// eslint-disable-next-line import/namespace
import { Link } from "react-router-dom";

type Props = {
  painting: Painting;
};

const SmallCard = (props: Props) => {
  return (
    <div>
      <Link to={`/about/:${props.painting.id}`}>
        <h6>{props.painting.title}</h6>
      </Link>
      <h6>{props.painting.artist_title}</h6>
      <h6>{props.painting.is_public_domain ? "Public" : "Private"}</h6>
      <FavButton painting={props.painting} />
      <h6>-----------------------------</h6>
    </div>
  );
};

export default SmallCard;
