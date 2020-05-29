import React, { useState } from 'react';
import '../../../resource/css/joinView.css';
import {getFormParam, getData} from '../../../common/module/form';
import JoinViewModel from '../ViewModel/joinViewModel';
import JoinVO from '../ValueObject/JoinVO'
import {observer} from 'mobx-react';

const JoinInput = observer((props : any) => {
    return <input className={'joinPage_input ' + props.errState} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} autoComplete="off"/>
});

const JoinView = observer(() => {
    const [msg, setMsg] = useState('');
    const [css, setCss] = useState({
        id : '',
        passwrod : ''
    });
    
    const onSubmit = (e : any) : void => {
        e.preventDefault();
        const valid = JoinViewModel.valid(getData(e));
        if(valid === 'success'){
            JoinViewModel.joinRequest(getFormParam(e, JoinVO));
            
        } else if( valid === 'blank') {
            setMsg('빈칸없이 입력해주세요.');
            setCss({id : '', passwrod :''});
        } 
        else if(valid === 'password') {
            setMsg('비밀번호를 확인해주세요.');
            setCss({id : '', passwrod :'duple'});
        }
    }
    
    return (
    <div className="joinPage">
        <h1 className="joinPage_h1">계정 정보를 입력해주세요</h1>
            <form onSubmit={onSubmit}>
                <h2 className="joinPage_h2">계정 이메일</h2>
                <JoinInput type={'text'} placeholder={'이메일 주소 입력'} name={'id'} valid={'아이디'} />
                <span className="joinPage_loingState">{JoinViewModel.isDuple() ? '중복된아이디가 존재합니다.' : msg}</span>
                <h2 className="joinPage_h2 joinPage_blank">비밀번호</h2>
                <JoinInput type={'password'} placeholder={'비밀번호(8~32자리)'} name={'password'} errState={css.passwrod} />
                <JoinInput type={'password'} placeholder={'비밀번호 재입력'} name={'_passwordRe'} errState={css.passwrod} />

                <h2 className="joinPage_h2">닉네임</h2>
                <JoinInput type={'text'} placeholder={'닉네임을 입력해주세요.'} name={'nickName'} valid={'닉네임'}/>

                <input className="joinPage_submit" type="submit" value="다음"/>
            </form>
    </div>
    )
});

export default JoinView;

