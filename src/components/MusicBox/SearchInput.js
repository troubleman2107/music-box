import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import jsonp from "jsonp";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../Theme";

const useStyle = makeStyles({
   root: {
      "& .Mui-focused": {
         color: orange,
      },
      "& .MuiOutlinedInput-root": {
         "&:hover fieldset": {
            borderColor: orange,
         },
      },
   },
   clearIndicator: {
      color: "#ffa726",
   },
   inputRoot: {
      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "#000",
         },
      },
   },
});

const SearchInput = ({ onVideoSearch, searchResults }) => {
   const useClass = useStyle();
   const [value, setValue] = useState("");

   const [optionsSearch, setOptionsSearch] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (searchResults.length === 0) {
         setValue("");
      }
      if (searchResults.length > 0) {
         setLoading(false);
      }
   }, [searchResults]);

   const fetchSearchResults = (term) => {
      jsonp(
         `https://clients1.google.com/complete/search?client=youtube&hl=en&ds=yt&q=${term}`,
         null,
         function (err, data) {
            if (err) {
               console.error(err.message);
            } else {
               setOptionsSearch(data[1].map((item) => item[0]));
            }
         }
      );
   };

   const handleOnKeyUp = (e) => {
      fetchSearchResults(e.target.value);
   };

   const handleOnChange = (event, val) => {
      setValue(val);
      onVideoSearch(val);
      if (val !== null) {
         setLoading(true);
      }
   };

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <Autocomplete
            className={`${useClass.clearIndicator} ${useClass.root}`}
            classes={useClass}
            value={value}
            onKeyUp={handleOnKeyUp}
            onChange={handleOnChange}
            id="controllable-states-demo"
            freeSolo
            options={optionsSearch}
            getOptionSelected={(option, value) =>
               option.description === value.description
            }
            renderInput={(params) => (
               <TextField
                  {...params}
                  className={`${useClass.root} ${useClass.inputRoot}`}
                  label="Search Youtube Video"
                  id="input-with-icon-adornment"
                  variant="outlined"
               />
            )}
         />
         <Box display="flex" justifyContent="center" p={2}>
            {loading === false ? null : <CircularProgress />}
         </Box>
      </ThemeProvider>
   );
};

export default SearchInput;
