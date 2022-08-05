import { useState, createContext, useReducer } from "react";
import videoReducer from "./AppReducer";
import useFirestore from "../hooks/useFirestore";

const initialState = [];
export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
   const [state, dispatch] = useReducer(videoReducer, initialState);
   const [videoSelect, setVideoSelect] = useState([]);

   const videos = useFirestore('videos', '');
   // videos.forEach((item) => initialState.concat(...item.video));

   function addVideo(video) {
      dispatch({
         type: 'ADD_VIDEO',
         payload: video,
      });
   }



   return (
      <AppContext.Provider
         value={{ videos, addVideo, videoSelect, setVideoSelect }}
      >
         {children}
      </AppContext.Provider>
   );
}
