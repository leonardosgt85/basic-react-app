import React from 'react'
import './style.css'
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Brasao from '../../assets/brasaoDaci.gif';

export default function Login(){
    return(
        <div id='id_container_page_1'>
            <div id='id_container_form_1'>
            
            <div id= 'id_brasao_l' className='divCenter_1'>
                <img src={Brasao} alt='some value' width='30%'/>
            </div>

            <div id='id_containerBox_1'>
            <Box
            
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

            <div>

            <div className = 'divCenter_1'>
                <TextField
                required
                id="outlined-required"
                label="Login"
                defaultValue=""
                
                />
            </div>

            <div className = 'divCenter_1'>
            <TextField
                required
                id="outlined-required"
                label="Password"
                type={'password'}
                defaultValue=""
                />
            </div>
            </div>
            <div id='id_button_1' className = 'divCenter_1'>
            <Button variant="contained" size="small">Enviar</Button>
            </div>

            <div id= 'id_lock_1' className='divCenter_1'>
                <LockIcon fontSize = 'large'/>
            </div>

            </Box>
        </div>
        </div>
        </div>
    )
}