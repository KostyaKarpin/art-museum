import useFetch from "@/hooks/useFetch";
import PaintingCard from "../cards/painting/PaintingCard";
import { GridWrapper, Section } from "./WorksStyles";
import SectionTitle from "../headers/section/SectionTitle";

const url = "https://api.artic.edu/api/v1";

const Works = () => {
  const [paintings] = useFetch(url, 1, 9);
  return (
    <Section>
      <SectionTitle
        firstLine={"Here some more"}
        secondLine={"Other works for you"}
      />
      {paintings && (
        <GridWrapper>
          {paintings.map((element, index) => {
            return <PaintingCard key={index} painting={element} />;
          })}
        </GridWrapper>
      )}
    </Section>
  );
};

export default Works;
