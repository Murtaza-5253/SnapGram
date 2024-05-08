import GridPostList from "./GridPostList";
import Loader from "./Loader";

type SearchResultProps = {
  isSearchFetching: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchedPost: any;
};
const SearchResults = ({
  isSearchFetching,
  searchedPost,
}: SearchResultProps) => {
  if (isSearchFetching) return <Loader />;
  if (searchedPost && searchedPost.documents.length > 0) {
    return <GridPostList posts={searchedPost.documents!} />;
  }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No Results Found</p>
  );
};

export default SearchResults;
