import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import SearchModal from "./SearchModal";

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

const FilterButtonList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button onClick={handleOpen}>🔍 동영상 검색</Button>
      <Modal open={open} onClose={handleClose}>
        <SearchModal />
      </Modal>
    </Box>
  );
};

export default FilterButtonList;
