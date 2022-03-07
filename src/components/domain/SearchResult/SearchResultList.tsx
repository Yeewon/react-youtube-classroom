import { Box } from "@mui/material";
import { Video } from "@/models/Video";
import { SearchResult } from "@/components/domain/SearchResult";
import useLocalStorage from "@/hooks/useLocalStorage";
import { VIDEO_INFOS } from "@/constants/localStorage";

type Props = {
  results: Video[];
  onClickSaveButton: object;
};

const SearchResultList = ({ results, onClickSaveButton }: Props) => {
  const [savedVideoList] = useLocalStorage<Video[]>(VIDEO_INFOS, []);

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
