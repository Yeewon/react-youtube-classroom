import { Box } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import { Video } from "@/models/Video";
import { SearchModal } from "@/components/domain/SearchModal";
import { useFilterDispatch } from "@/contexts/FilterContext";

type Props = {
  display: string;
  onSaveVideo: (savedVideoList: Video[]) => void;
};

const DisplayButton = styled.div``;

const Button = styled.button`
  height: 36px;
  min-width: 64px;
  margin-left: 10px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
  border-style: none;
  cursor: pointer;
`;

const FilterButtonList = ({ display, onSaveVideo }: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useFilterDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDisplay = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLInputElement;

    switch (id) {
      case "toWatch":
        return dispatch({ type: "CHANGE_TO_WATCH" });
      case "watched":
        return dispatch({ type: "CHANGE_WATCHED" });
      case "liked":
        return dispatch({ type: "CHANGE_LIKED" });
      default:
        throw new Error("Unhandled action");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 3,
        mb: 3,
      }}
    >
      <DisplayButton onClick={handleDisplay}>
        <Button
          id="toWatch"
          style={{
            backgroundColor:
              display === "toWatch"
                ? "rgb(179, 234, 242)"
                : "rgb(239, 239, 239)",
          }}
        >
          👁️ 볼 영상
        </Button>
        <Button
          id="watched"
          style={{
            backgroundColor:
              display === "watched"
                ? "rgb(179, 234, 242)"
                : "rgb(239, 239, 239)",
          }}
        >
          ✅ 본 영상
        </Button>
        <Button
          id="liked"
          style={{
            backgroundColor:
              display === "liked" ? "rgb(179, 234, 242)" : "rgb(239, 239, 239)",
          }}
        >
          👍🏻 좋아요 한 영상
        </Button>
      </DisplayButton>
      <Button onClick={handleOpen}>🔍 동영상 검색</Button>
      <SearchModal
        open={open}
        onClose={handleClose}
        onSaveVideo={onSaveVideo}
      />
    </Box>
  );
};

export default FilterButtonList;
