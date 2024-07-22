import { SearchResult } from "@/types/SearchResultTypes";
import { Text, Wrapper } from "./SearchBarResultStyles";

type Props = {
  result: SearchResult;
};
const SearchBarResult = (props: Props) => {
  const { id, title, artist_title } = props.result;
  return (
    <Wrapper to={`/about/:${id}`}>
      <Text $isAuthor={false}>{title}</Text>
      <Text $isAuthor={true}>{artist_title}</Text>
    </Wrapper>
  );
};

export default SearchBarResult;
