import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },
  playButton: {
    padding: "5px",
  },
  box: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  IconButton: {
    boxShadow: "0px 7px 11px -1px rgba(0,0,0,0.67)",
  },
});

const Playbar = ({ activeVideo, onPause, onPlay, onNext, onPrev }) => {
  const classes = useStyles();
  const [statusVideo, setStatusVideo] = useState(false);

  useEffect(() => {
    setStatusVideo(activeVideo.playing);
  }, [activeVideo]);

  const handlePause = () => {
    setStatusVideo(false);
    onPause();
  };

  const handlePlay = () => {
    if (activeVideo.url !== "https://www.youtube.com/watch?v=") {
      setStatusVideo(true);
    }
    onPlay();
  };

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  return (
    <Box boxShadow={3} mb={1} className={classes.box}>
      <Paper className={classes.root}>
        <Button aria-label="play" className={`${classes.playButton}`}>
          <SkipPreviousIcon
            onClick={handlePrev}
            color="primary"
            fontSize="large"
          />
        </Button>
        <IconButton aria-label="play" className={`${classes.playButton}`}>
          {statusVideo ? (
            <StopRoundedIcon
              onClick={handlePause}
              color="primary"
              fontSize="large"
            />
          ) : (
            <PlayCircleFilledIcon
              onClick={handlePlay}
              color="primary"
              fontSize="large"
            />
          )}
        </IconButton>
        <Button aria-label="play" className={`${classes.playButton}`}>
          <SkipNextIcon onClick={handleNext} color="primary" fontSize="large" />
        </Button>
      </Paper>
    </Box>
  );
};

export default Playbar;
