import React from 'react';
import {observer} from 'mobx-react'

import '../../../index.css';
import LoginMark from '../../../resource/image/loginMark.gif'
import Input from '../../../common/atoms/input/input';
import {getFormParam} from '../../../common/module/form';
import LoginViewModel from '../ViewModel/loginViewModel';

const LoginView = observer(() => {
    

    const onSubmit = (e) => {
        e.preventDefault();
        LoginViewModel.sendLoginData(getFormParam(e));
    }
    
        return (
            <div className="loginpage">
                <img className="loginpage_logo" src={LoginMark}  alt="로고"/>
                <div className="loginpage_inputArea">
                    <form onSubmit={onSubmit}>
                        <Input type={'text'} css={'input_login'} placeholder={'이메일 또는 전화번호'} name="id"/>
                        <Input type={'password'} css={'input_login'} placeholder={'비밀번호'} name="password" />
                        <Input css={"input_login submit"} type="submit" value="로그인" />
                    </form>
                </div>
            </div>
        );
});

export default LoginView; 