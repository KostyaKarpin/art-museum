import { SearchResult } from "@/types/SearchResultTypes";
import SearchBarResult from "../searchResult/SearchBarResult";
import { Wrapper } from "./SearchBarResultsStyle";
type Props = {
  results: SearchResult[];
};
const SearchBarResults = (props: Props) => {
  console.log(props.results);

  return (
    <Wrapper>
      {props.results &&
        props.results.map((element, index) => {
          return <SearchBarResult key={index} result={element} />;
        })}
    </Wrapper>
  );
};

export default SearchBarResults;
