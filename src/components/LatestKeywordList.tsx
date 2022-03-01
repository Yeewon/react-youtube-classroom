import { Box, Typography } from "@mui/material";
import LatestKeywordItem from "./LatestKeywordItem";

type Props = {
  keywordList: string[];
};

const LatestKeywordList = ({ keywordList }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Box>
        <Typography color={"rgb(55, 65, 81)"}>최근 검색어:</Typography>
      </Box>
      <Box>
        {keywordList.map((aKeyword, index) => (
          <LatestKeywordItem keyword={aKeyword} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default LatestKeywordList;
