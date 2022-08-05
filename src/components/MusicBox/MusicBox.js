import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import SearchVideo from "./SearchVideo";
import ListVideos from "./ListVideos";
import { useState, useContext } from "react";
import VideoPay from "./VideoPlay";
import theme from "../../Theme";
import LeftBar from "./LeftBar";
import { AppContext } from "../../Context/AppProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxHeight: "900px",
    overflow: "hidden",
    marginBottom: "10px",
    marginTop: "10px",
    overflowX: "clip",
  },
  paper: {
    padding: theme.spacing(2),
    height: "100%",
  },
  spacing: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));

const MusicBox = () => {
  const classes = useStyles();
  const [activeVideoId, setActiveVideoId] = useState("");
  const { videoSelect, setVideoSelect } = useContext(AppContext);

  const handleActiveVideo = (value) => {
    console.log(value);
    setActiveVideoId(value);
  };

  const nextActive = (value) => {
    setActiveVideoId(value);
  };

  const checkedVideo = (value) => {
    const selectVideo = [...videoSelect];
    for (const id of value) {
      if (selectVideo.includes(id)) {
        let indexItem = selectVideo.indexOf(id);
        selectVideo.splice(indexItem);
        setVideoSelect(selectVideo);
      } else {
        selectVideo.push(id);
        setVideoSelect(selectVideo);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={1}>
        <LeftBar classes={classes} />
        <Grid item xs={5}>
          <VideoPay
            nextActive={nextActive}
            activeVideoId={activeVideoId}
            className={classes.paper}
          />
          <ListVideos
            checkedVideo={checkedVideo}
            activeVideoId={activeVideoId}
            activeVideo={handleActiveVideo}
            classes={classes}
          />
        </Grid>
        <SearchVideo classes={classes} />
      </Grid>
    </ThemeProvider>
  );
};

export default MusicBox;
