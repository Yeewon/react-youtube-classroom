import { Box } from "@mui/material";
import { Video } from "@/models/Video";
import { SearchResult } from "@/components/domain/SearchResult";

type Props = {
  results: Video[];
  savedVideoList: Video[];
  onClickSaveButton: object;
};

const SearchResultList = ({
  results,
  savedVideoList,
  onClickSaveButton,
}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {results.map((searchResult, index) => {
        const isSaved: boolean = !!savedVideoList.filter(
          savedVideo => savedVideo.videoId === searchResult.videoId,
        ).length;

        return (
          <SearchResult
            key={index}
            videoInfo={searchResult}
            initialState={isSaved}
            onClickSaveButton={onClickSaveButton}
          />
        );
      })}
    </Box>
  );
};

export default SearchResultList;
