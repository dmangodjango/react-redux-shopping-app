import { useEffect, useState } from "react";
import { MODAL_TYPES } from "../constants/modalTypes";
import useGetModalFromParam from "./useGetModalFromParam";

export default () => {
    const modalName = useGetModalFromParam(MODAL_TYPES.popup);
    const [activeModal, setActiveModal] = useState(modalName);

    useEffect(() => {
        if(modalName) {
            setActiveModal(modalName);
        } else {
            setActiveModal(null);
        }
    }, [modalName]);

    const isOpened = activeModal? true: false;

    console.log(activeModal, "====> activemodal")
    console.log(isOpened, "====> isOpened")

   return {
       activeModal,
       isOpened
   } 
}