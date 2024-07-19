import { SmallCardsTypes } from "@/types/SmallCardTypes";
import FavButton from "./FavButton";

type Props = {
  painting: SmallCardsTypes;
};

const SmallCard = (props: Props) => {
  return (
    <div>
      <h6>{props.painting.title}</h6>
      <h6>{props.painting.artist_title}</h6>
      <h6>{props.painting.is_public_domain ? "Public" : "Private"}</h6>
      <FavButton paintingID={props.painting.id} />
      <h6>-----------------------------</h6>
    </div>
  );
};

export default SmallCard;
