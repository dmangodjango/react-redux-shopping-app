import React from 'react'

import { 
    ModalBackground, 
    ModalContainer } from './Modal.element';

const Modal = ({childComp}) => {
    return (
        <>
            <ModalBackground>
                <ModalContainer>
                   {childComp}
                </ModalContainer>
            </ModalBackground>
        </>

    )
}

export default Modal
