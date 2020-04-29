import React from 'react';
import UserLoginVM from '../viewModel/userLoginVM'

function userLogin() : any {
        const userLoginVM : UserLoginVM = UserLoginVM.getInstance();        

        const onSubmit = (e : any) => {
            e.preventDefault();
            debugger;
        }

        return (
        <>
            <form method="post" onSubmit={onSubmit}>
                <input type="text" name="id"/>
                <input type="password" name="password"/>
                <input type="submit" />
            </form>
        </>
    )
}

export default userLogin;