import MusicBox from "./components/MusicBox/MusicBox";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";

function App() {
   return (
      <Router>
         <AuthProvider>
            <AppProvider>
               <Switch>
                  <Route component={Login} path="/login" />
                  <Route component={MusicBox} path="/" />
               </Switch>
            </AppProvider>
         </AuthProvider>
      </Router>
   );
}

export default App;
