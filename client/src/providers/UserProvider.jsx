import React from 'react';


import { MyUserContextProvider } from "../hooks/useUser.jsx";

const UserProvider = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
};

export default UserProvider;
