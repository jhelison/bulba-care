import React from "react"
import Modal from "react-modal"

import CustomTextInput from "../../../components/CustomTextInput"

import CustomButton from "../../../components/CustomButton"

import { FiSave } from "react-icons/fi"
import { FiSkipBack } from "react-icons/fi"

const EditCustomerModal = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            className="modal"
            overlayClassName="overlayModal"
        >
            <h2>Alterar Produto</h2>
            <hr className="solid"></hr>
            <label className="h2-label">Foto do produto</label>
            <div className="d-grid grid-1-1 grid-gap-10">
                <div className="product-img-container d-flex just-content-center align-items-center">
                    <img
                        src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
                        alt="product-img"
                    />
                </div>
                <div>
                    <CustomTextInput label="Nome do produto" />
                    <CustomTextInput label="Valor" />
                    <CustomTextInput label="Estoque" />
                    <CustomTextInput label="url" />
                </div>
            </div>
            <div className="grid-gap-10 d-flex align-items-center just-content-end">
            <CustomButton title="Cancelar" icon={<FiSkipBack/>} onClick={props.onClose}/>
            <CustomButton title="Salvar"  icon={<FiSave/>} sucess/>
            </div>
            {/* <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput label="Primeiro nome"/>
                <CustomTextInput label="Ultimo nome"/>
            </div>
            <h3>Endereço</h3>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput label="Logradouro"/>
                <CustomTextInput label="Bairro"/>
            </div>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput label="Numero"/>
                <CustomTextInput label="Cidade"/>
            </div>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput label="Estado"/>
                <CustomTextInput label="País"/>
            </div>
            <div className="grid-gap-10 d-flex align-items-center just-content-end">
            <CustomButton title="Cancelar" icon={<FiSkipBack/>} onClick={props.onClose}/>
            <CustomButton title="Salvar"  icon={<FiSave/>} sucess/>
            </div> */}
        </Modal>
    )
}

export default EditCustomerModal
