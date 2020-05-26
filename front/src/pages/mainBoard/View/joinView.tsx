import React from 'react';
import '../../../resource/css/joinView.css';
import {getFormParam} from '../../../common/module/form';
import JoinViewModel from '../ViewModel/joinViewModel';
import JoinVO from '../ValueObject/JoinVO'


const JoinInput = (props) => {
    return <input className="joinPage_input" type={props.type} placeholder={props.placeholder} name={props.name} />
}

function JoinView() {
    let msg = '';

    const onSubmit = (e : any) : void => {
        e.preventDefault();
        JoinViewModel.joinRequest(getFormParam(e, JoinVO));
    }


    return (
    <div className="joinPage">
        <h1 className="joinPage_h1">계정 정보를 입력해주세요</h1>
            <form onSubmit={onSubmit}>
                <h2 className="joinPage_h2">계정 이메일</h2>
                <JoinInput type={'text'} placeholder={'이메일 주소 입력'} name={'id'} valid={'아이디'}/>
                <span className="joinPage_loingState">{msg}</span>
                <h2 className="joinPage_h2 joinPage_blank">비밀번호</h2>
                <JoinInput type={'password'} placeholder={'비밀번호(8~32자리)'} name={'password'} />
                <JoinInput type={'password'} placeholder={'비밀번호 재입력'} name={'_passwordRe'} />

                <h2 className="joinPage_h2">닉네임</h2>
                <JoinInput type={'text'} placeholder={'닉네임을 입력해주세요.'} name={'nickName'} valid={'닉네임'}/>

                <input className="joinPage_submit" type="submit" value="다음"/>
            </form>
    </div>
    )
}

export default JoinView;

