import React, { useEffect, useState } from "react"
import Modal from "react-modal"

import CustomTextInput from "../../../components/CustomTextInput"

import CustomButton from "../../../components/CustomButton"

import { FiSave } from "react-icons/fi"
import { FiSkipBack } from "react-icons/fi"

const EditCustomerModal = (props) => {
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [stock, setStock] = useState("")
    const [url, setUrl] = useState("")

    const uuidv4 = () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8
                return v.toString(16)
            }
        )
    }

    const getToday = () => {
        var today = new Date();
        return today.toISOString().substring(0, 10);
    }

    const getProduct = () => {
        if(props.workingProduct){
            const products = localStorage.getItem("products")
            const productsJson = JSON.parse(products)

            const product = productsJson.find(
                (value) => value.guid === props.workingProduct
            )

            if(product){
                setName(product.name)
                setValue(product.value)
                setStock(product.stock)
                setUrl(product.url)
            }
            else{
                setName("")
                setValue("")
                setStock("")
                setUrl("")
            }
        }
    }

    const updateAddProduct = () => {
        if(props.workingProduct){
            props.updateProduct(props.workingProduct, {
                guid: props.workingProduct,
                name,
                registered: getToday(),
                stock,
                value,
                url
            })
        }
        else{
            props.addProduct({
                guid: uuidv4(),
                name,
                registered: getToday(),
                stock,
                value,
                url
            })
        }
        props.onClose()
    }

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onClose}
            className="modal"
            overlayClassName="overlayModal"
            onAfterOpen={getProduct}
        >
            <h2>Alterar Produto</h2>
            <hr className="solid"></hr>
            <label className="h2-label">Foto do produto</label>
            <div className="d-grid grid-1-1 grid-gap-10">
                <div className="product-img-container d-flex just-content-center align-items-center">
                    <img src={url} alt="product-img" />
                </div>
                <div>
                    <CustomTextInput
                        label="Nome do produto"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <CustomTextInput
                        label="Valor"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <CustomTextInput
                        label="Estoque"
                        mask="999"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                    <CustomTextInput
                        label="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid-gap-10 d-flex align-items-center just-content-end">
                <CustomButton
                    title="Cancelar"
                    icon={<FiSkipBack />}
                    onClick={props.onClose}
                />
                <CustomButton title="Salvar" icon={<FiSave />} sucess onClick={updateAddProduct}/>
            </div>
        </Modal>
    )
}

export default EditCustomerModal
