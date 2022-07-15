import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import alertState from '../../src/components/zustand/alertState';

export default function Alert2(){
const alertstateData = alertState(state=>state.alertData);
const setAlertData = alertState(state=>state.setAlertData);


setTimeout(function () {setAlertData(null)}, 3000);

   return ( 
                    <div style={{position: 'absolute', marginTop:0}}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert 
                            severity={alertstateData.severity} size='small'
                            
                            action={
                                <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setAlertData(null);
                                }}
                                >
                                <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                    >
                        {alertstateData.message}
                    </Alert>
                    </Stack>
                    </div>
                );
      
}