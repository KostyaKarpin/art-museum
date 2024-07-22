import { SearchResult } from "@/types/SearchResultTypes";
import { Text, Wrapper } from "./SearchBarResultStyles";

type Props = {
  result: SearchResult;
};
const SearchBarResult = (props: Props) => {
  return (
    <Wrapper>
      <Text $isAuthor={false}>{props.result.title}</Text>
      <Text $isAuthor={true}>{props.result.artist_title}</Text>
    </Wrapper>
  );
};

export default SearchBarResult;
