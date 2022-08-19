
import Context from './Context';
import React, { useState } from 'react';

const SanarProvider = ({ children }) => {
    const [_isLogin, set_Login] = useState(false)

    const store = {
        isLogin: _isLogin,

        loginUser: (val) => {
            set_Login(val)
        },

        logOut: (val) => {
            set_Login(val)
        }

    }
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
}

export default SanarProvider;