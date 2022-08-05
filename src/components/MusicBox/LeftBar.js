import { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Logo from './Logo';
import VideoCount from './VideoCount';
import Button from '@material-ui/core/Button';
import { auth } from '../../firebase/config';
import { AppContext } from '../../Context/AppProvider';
import Avatar from '@material-ui/core/Avatar';
import { AuthContext } from '../../Context/AuthProvider';
import { deleteDocument } from '../../firebase/services';
import ModalComponent from './ModalComponent';
import { CSSTransition } from 'react-transition-group';
import Notification from "./Notification";

const LeftBar = ({ classes, mainVideo }) => {
   const { videos, videoSelect } = useContext(AppContext);
   const { user } = useContext(AuthContext);
   const [open, setOpen] = useState(false);
   const [statusNotifiParent, setStatusNotifi] = useState({
      open: false,
      title: "",
      type: "",
   });

   const deleteVideo = () => {
      videoSelect.forEach((id) => {
         deleteDocument('videos', id);
      });
      handleCloseModal();
      setStatusNotifi({
         ...statusNotifiParent,
         open: true,
         title: "Delete video successfully !",
         type: "success",
      });
   };

   const handleOpenModal = () => {
      if(videoSelect.length === 0){
         setStatusNotifi({
            ...statusNotifiParent,
            open: true,
            title: "Please select video !",
            type: "error",
         });
      } else {
         setOpen(true);
      }
   };

   const handleCloseModal = () => {
      setOpen(false);
   };

   return (
      <Grid item xs={3}>
         <Paper elevation={3} className={`${classes.paper} ${classes.spacing}`}>
            <Logo />
            <Grid container>
               <Grid xs={2}>
                  <Avatar src={user.photoURL}>OP</Avatar>
               </Grid>
               <Grid
                  container
                  alignItems="center"
                  display="flex"
                  justify="space-between"
                  style={{ paddingLeft: 5 }}
                  xs={10}
               >
                  {user.displayName}
                  <Button
                     onClick={() => auth.signOut()}
                     variant="outlined"
                     size="medium"
                     color="primary"
                  >
                     Log out
                  </Button>
               </Grid>
            </Grid>
            <VideoCount totalVideo={videos.length} />
            <Button
               variant="contained"
               color="primary"
               style={{ width: '100%' }}
               onClick={handleOpenModal}
            >
               Delete Video
            </Button>
            {
               (open) ? <ModalComponent deleteVideo={deleteVideo} handleCloseModal={handleCloseModal} /> : false
            }
         </Paper>
         <Notification statusNotifiParent={statusNotifiParent} />
      </Grid>
   );
};

export default LeftBar;
