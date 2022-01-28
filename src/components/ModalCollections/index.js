import React from 'react'
import Login from "../../pages/Login/Login";
import { MODAL_NAME } from './constants/modalName';
import useGetModalState from './hooks/useGetModalState';


const Modals = {
    [MODAL_NAME.signin]: Login
}

const ModalCollections = () => {
    const {activeModal, isOpened} = useGetModalState();
    const Component = Modals[activeModal];

    if(!Component) return null;
    
    console.log(Component, "===> Component")
    return <Component isOpened={isOpened}/>
}

export default ModalCollections;
