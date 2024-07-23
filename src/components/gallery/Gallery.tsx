import SectionTitle from "../headers/section/SectionTitle";
import { Wrapper } from "./GalleryStyles";
import PaintingsList from "./paintingsList/PaintingsList";

const Gallery = () => {
  return (
    <Wrapper>
      <SectionTitle
        firstLine={"Topics for you"}
        secondLine={"Our special gallery"}
      />
      <PaintingsList />
    </Wrapper>
  );
};

export default Gallery;
