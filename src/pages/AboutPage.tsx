import useFetchByID from "@/hooks/useFetchByID";
import { Painting } from "@/types/PaintingTypes";
// eslint-disable-next-line import/namespace
import { useParams } from "react-router-dom";

const AboutPage = () => {
  const { id } = useParams();
  console.log("ID:" + id);

  const data: Painting | undefined = useFetchByID(id!);
  console.log(data);

  return (
    <div>
      <h1>AboutPage</h1>
      <div>
        <h1>{data && data.title}</h1>
        <h2>{data && data.artist_title}</h2>
        <h4>{data && data.artist_display}</h4>
        <h6>-----------------------</h6>
      </div>
    </div>
  );
};

export default AboutPage;
