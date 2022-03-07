import { Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { IS_LIKED, IS_WATCHED } from "../../constants/classroom";
import {
  LIKED_SUCCESS_MSG,
  LIKE_CANCEL_SUCCESS_MSG,
  TO_WATCH_SUCCESS_MSG,
  WATCHED_SUCCESS_MSG,
} from "../../constants/snackbarMessage";
import { SnackbarType } from "../../models/Snackbar";

type Props = {
  snack: SnackbarType;
  onReset: () => void;
};

const ClassroomSnackbar = ({ snack, onReset }: Props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("snackbar test!");
  const { type, status } = snack;

  useEffect(() => {
    if (type) {
      setOpen(true);
      handleSnackMsg(type);
      onReset();
    }
  }, [type, status, onReset]);

  const handleSnackMsg = (type: string) => {
    let message = "";
    if (type === IS_WATCHED) {
      message = status ? WATCHED_SUCCESS_MSG : TO_WATCH_SUCCESS_MSG;
    }
    if (type === IS_LIKED) {
      message = status ? LIKED_SUCCESS_MSG : LIKE_CANCEL_SUCCESS_MSG;
    }
    setMessage(message);
  };

  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleSnackClose}
      message={message}
    />
  );
};

export default ClassroomSnackbar;
