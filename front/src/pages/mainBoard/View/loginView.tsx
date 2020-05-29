import React, {useState} from 'react';
import {observer} from 'mobx-react'
import { Redirect, Link } from "react-router-dom"
import '../../../resource/css/loginView.css';
import LoginMark from '../../../resource/image/loginMark.gif'
import {getFormParam} from '../../../common/module/form';
import LoginViewModel from '../ViewModel/loginViewModel';
import LoginVO from '../ValueObject/LoginVO';


const Input = observer((param) => {
    return <input className={param.css + ' input'} type={param.type} placeholder={param.placeholder} name={param.name} value={param.value} />;
});

const LoginView = observer(() => {
    const [msg, setMsg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        LoginViewModel.sendLoginData(getFormParam(e, LoginVO))
    }

    if(LoginViewModel.loginState === 'success') {
        return <Redirect to='/friend' />;
    }

    return  (
        <>
            <div className="loginpage">
                <img className="loginpage_logo" src={LoginMark}  alt="로고"/>
                <div className="loginpage_inputArea">
                    <form onSubmit={onSubmit}>
                        <Input type={'text'} css={'input_login'} placeholder={'이메일 또는 전화번호'} name="id"/>
                        <Input type={'password'} css={'input_login'} placeholder={'비밀번호'} name="password" />
                        <Input css={"input_login submit"} type="submit" value="로그인" />
                    </form>
                    <div className="loginpage_join">
                        <Link to='/join'>짭카오톡 가입하기</Link>
                    </div>
                    <span className="loginpage_msg">{LoginViewModel.loginState === 'fail' ? '아이디/ 비밀번호를 확인해주세요.' : msg}</span>
                </div>
            </div>
        </>
    );
});

export default LoginView; 