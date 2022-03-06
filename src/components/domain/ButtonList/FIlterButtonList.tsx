import { Box, Modal } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import { Video } from "../../../models/Video";
import SearchModal from "../SearchModal/SearchModal";

type Props = {
  display: string;
  onSaveVideo: (savedVideoList: Video[]) => void;
  onDisplay: (id: string) => void;
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

const FilterButtonList = ({ display, onSaveVideo, onDisplay }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDisplay = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.target as HTMLInputElement;
    onDisplay(id);
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
      <Modal open={open} onClose={handleClose}>
        <SearchModal onClose={handleClose} onSaveVideo={onSaveVideo} />
      </Modal>
    </Box>
  );
};

export default FilterButtonList;
