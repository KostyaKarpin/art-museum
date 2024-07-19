import { SearchResult } from "@/types/SearchResultTypes";

type Props = {
  result: SearchResult;
};
const SearchBarResult = (props: Props) => {
  return (
    <div>
      {props.result.title} - {props.result.artist_title}
    </div>
  );
};

export default SearchBarResult;
