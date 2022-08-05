import React from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';     
import Alert from '@material-ui/lab/Alert';
import { useState, useEffect } from 'react';

const Notification = ({statusNotifiParent}) => {

    const [statusNotifi,setStatusNotifi] = useState({
        open: false,
        Transition: Fade, 
        title: '',
        type: 'success'
    })

    useEffect(() => {
        setStatusNotifi({...statusNotifi,open: statusNotifiParent.open, title: statusNotifiParent.title, type: statusNotifiParent.type});
        setTimeout(() => {
            setStatusNotifi({...statusNotifiParent,open: false})
        }, 3500);
    },[statusNotifiParent ])

    const handleClose = () => {
        setStatusNotifi({
        ...statusNotifi,
        open: false,
        });
        
    };

    return (
        <Snackbar
                open={statusNotifi.open}
                TransitionComponent={statusNotifi.Transition}
                message="I love snacks"
                key={statusNotifi.Transition}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert onClose={handleClose} severity={(statusNotifi.type) ? statusNotifi.type : 'success'} variant="filled">
                        {statusNotifi.title}
                </Alert>
        </Snackbar>
    )
}

export default Notification

