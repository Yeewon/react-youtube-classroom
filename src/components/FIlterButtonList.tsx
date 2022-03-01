import { Box } from "@mui/material";
import Button from "../components/Button";

const FilterButtonList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
        mb: 3,
      }}
    >
      <Button>👁️ 볼 영상</Button>
      <Button>✅ 본 영상</Button>
      <Button>👍🏻 좋아요 한 영상</Button>
      <Button>🔍 동영상 검색</Button>
    </Box>
  );
};

export default FilterButtonList;
