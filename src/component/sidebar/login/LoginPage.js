import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import configApi from "../../config.json"
import Swal from 'sweetalert2';

function LoginPage({setOpen}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        const url = configApi.SERVER_API +"login"
        fetch(url,{
            method:"POST",
            credentials:"include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },body: JSON.stringify({
                username:username,
                password:password
            }),
        }).then(res=>res.json()).then(res=>{
            if(res["RTN"]){
                Swal.fire({
                  icon: 'success',
                  title: 'Login berhasil',
                })
            }else{
            Swal.fire({
                icon: 'error',
                title: 'Login gagal',
                text: res["MSG"],
            })
            }
        }).catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Login gagal',
                text: err,
            })
            console.log(err)
        }) 
    }

  return (
    <div className='p-5 rounded-md bg-white flex flex-col text-left w-80'>
        <div className='mb-5 text-xl font-bold'>
            Login
        </div>
        <TextField id="outlined-basic" sx={{mb:2}} label="Username"  onChange={(e)=>setUsername(e.target.value)} variant="outlined" />
        <TextField id="outlined-basic" sx={{mb:2}} label="Password"  type="password" onChange={(e)=>setPassword(e.target.value)} variant="outlined" />
        <div className='flex justify-end text-sm '>
            <div className='bg-red-500 hover:bg-red-700 text-white px-5 py-2 mr-2 rounded-sm cursor-pointer'
                onClick={()=>setOpen(false)}
            >
                Cancel
            </div>
            <div className='bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-sm cursor-pointer'
                onClick={login}
            >
                Sign In
            </div>
        </div>
    </div>
  )
}

export default LoginPage