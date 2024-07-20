import { Painting } from "@/types/PaintingTypes";
import FavButton from "./FavButton";

type Props = {
  painting: Painting;
};

const SmallCard = (props: Props) => {
  return (
    <div>
      <h6>{props.painting.title}</h6>
      <h6>{props.painting.artist_title}</h6>
      <h6>{props.painting.is_public_domain ? "Public" : "Private"}</h6>
      <FavButton painting={props.painting} />
      <h6>-----------------------------</h6>
    </div>
  );
};

export default SmallCard;
