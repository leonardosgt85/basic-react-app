import React from 'react'
import './style.css'
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Brasao from '../../assets/brasaoDaci.gif';
import api from '../../services/api';
import md5 from 'md5';

export default function Login(){

    const send = ()=>{
            const dados = {
                            login: document.getElementById('fieldLogin').value,
                            pwd:md5(document.getElementById('fieldPwd').value)
                          }
            api.post('/login', dados).then((r)=>{
                console.log(r.data)
            }).catch((e)=>{
                console.log(e)
            })
        
    }


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
                id="fieldLogin"
                label="Login"
                defaultValue=""
                
                />
            </div>

            <div className = 'divCenter_1'>
            <TextField
                required
                id="fieldPwd"
                label="Password"
                type={'password'}
                defaultValue=""
                />
            </div>
            </div>
            <div id='id_button_1' className = 'divCenter_1'>
            <Button variant="contained" size="small" onClick={send}>Enviar</Button>
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