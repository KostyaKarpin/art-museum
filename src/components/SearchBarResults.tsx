import { SearchResult } from "@/types/SearchResultTypes";
import SearchBarResult from "./SearchBarResult";
type Props = {
  results: SearchResult[];
};
const SearchBarResults = (props: Props) => {
  console.log(props.results);

  return (
    <div>
      <h4>results</h4>
      {props.results &&
        props.results.map((element, index) => {
          return <SearchBarResult key={index} result={element} />;
        })}
    </div>
  );
};

export default SearchBarResults;
