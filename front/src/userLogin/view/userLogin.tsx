import React from 'react';
import UserLoginVM from '../viewModel/userLoginVM'
import {MobXProviderContext, observer, Provider} from 'mobx-react';
import UserLoginVO from '../VO/userLoginVO' 

interface userLoginProp {
    userLoginVM : UserLoginVM;
}

const Content = observer(() => {
    const userLoginVM = UserLoginVM.getInstance() as UserLoginVM;
    let id:string, password:string;

    const onSubmit = (e : any) => {
        e.preventDefault();
        userLoginVM.matchUser(new UserLoginVO(id, password));
    }

    const onChange : any = (e : any) => {
        switch(e.target.name) {
            case 'id' :
                id = e.target.value;
            break;
            case 'password' :
                password = e.target.value;
            break;
        }
    }
    
    return (
    <>
        <form method="post" onSubmit={onSubmit} className="userLoginForm">
            <input type="text" name="id" onChange={onChange}/>
            <input type="password" name="password" onChange={onChange}/> <br />
            <input type="submit" />
        </form>
    </>
    )
});

const  UserLogin : any = () => {
    return <Provider userLogin = {UserLoginVM.getInstance()}><Content /></Provider>
};

export default UserLogin;   