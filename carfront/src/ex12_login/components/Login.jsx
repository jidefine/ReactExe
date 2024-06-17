import React, {useState} from 'react';
import { SERVER_URL } from './constants';
import {Button, TextField, Stack} from '@mui/material';

function Login(){
    // 사용자 입력과 인증 상태를 관리하는 상태 변수 선언
    cosnt [UserActivation, setUser] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setAuth] = useState(false);

     // 입력 값 변경 시 사용자 상태 업데이트
    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    }

    // 로그인 처리
    const login = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(user)
        }) 
        .then(response => {
            const jwtToken = response.headers.get('Authorization');
            if(jwtToken !== null){
                // 세션 스토리지에 JWT 토큰 저장하고 인증 상태 업데이트
                sessionStorage.setItem("jwt", jwtToken);
                setAuth(true);
            }
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            {/* UI 요소를 수직으로 쌓기 위한 Stack 컴포넌트 */}
            <Stack spacing={2} alignItems='center' mt={2}>
                <TextField name='username' label='Username' onChange={handleChange} />
                <TextField type='password' name='password' label='Password' onChange={handleChange} />
                <Button variant='outlined' color='primary' onClick={login}>Login</Button>
            </Stack>
        </div>
    )
}

export default Login;