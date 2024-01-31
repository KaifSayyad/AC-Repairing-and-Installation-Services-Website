import React,{ useEffect, useState } from "react";

import AuthModal from "../components/AuthModal";
import UploadServiceModal from "../components/UploadServiceModal";


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return (
    <>
        <AuthModal/>
        <UploadServiceModal/>
    </>
    );

}

export default ModalProvider;
