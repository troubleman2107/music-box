import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
   palette: {
      primary: orange,
      type: "dark",
      input: {
         border: orange,
      },
      success: orange,
   },
   overrides: {
      MuiCssBaseline: {
         "@global": {
            "*::-webkit-scrollbar": {
               width: "0.4em",
            },
            "*::-webkit-scrollbar-track": {
               boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
               webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            },
            "*::-webkit-scrollbar-thumb": {
               backgroundColor: "rgba(239,127,15,1)",
               // outline: '1px solid slategrey'
            },
            "*::.MuiOutlinedInput-notchedOutline": {
               borderColor: orange,
            },
            "& .MuiOutlinedInput-root": {
               "& fieldset": {
                  borderColor: "#000",
               },
            },
         },
      },
   },
   transitions: {
      easing: {
         easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
   },
});

const MusicBoxTheme = makeStyles((theme) => ({
   root: {
      // flexGrow: 1,
      maxHeight: "900px",
      overflow: "hidden",
      marginBottom: "10px",
      marginTop: "10px",
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

export default theme;
