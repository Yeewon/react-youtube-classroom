import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import noVideo from "@/assets/no-video-lottie.json";
import { Box } from "@mui/material";

type Props = {
  type: string;
};

type lottieType = {
  [key: string]: {
    lottie: object;
    loop: boolean;
  };
};

const lottieTypes: lottieType = {
  noVideo: {
    lottie: noVideo,
    loop: true,
  },
};

const LottieIcon = ({ type }: Props) => {
  const lottieIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieIcon.current) {
      lottie.loadAnimation({
        container: lottieIcon.current,
        renderer: "svg",
        loop: lottieTypes[type].loop,
        autoplay: true,
        animationData: lottieTypes[type].lottie,
      });
    }
  }, [type]);

  return (
    <Box
      sx={{
        height: 200,
        mt: "-30px",
        background: "transparent",
      }}
      ref={lottieIcon}
    />
  );
};

export default LottieIcon;
