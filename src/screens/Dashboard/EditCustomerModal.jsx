import React, { useState } from "react"
import Modal from "react-modal"

import CustomTextInput from "../../components/CustomTextInput"

import CustomButton from "../../components/CustomButton"

import { FiSave } from "react-icons/fi"
import { FiSkipBack } from "react-icons/fi"

const EditCustomerModal = (props) => {
    const [firstName, setfirstName] = useState("")
    const [lastname, setlastname] = useState("")
    const [street, setstreet] = useState("")
    const [district, setdistrict] = useState("")
    const [number, setnumber] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [country, setcountry] = useState("")
    const [total, settotal] = useState(0)

    const [modalTitle, setModalTitle]= useState("Alterar cliente")

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

    const getCustomer = () => {
        console.log(props.workingGUID)
        if (props.workingGUID) {
            const customers = localStorage.getItem("customers")
            const customersJson = JSON.parse(customers)

            const customer = customersJson.find(
                (value) => value.guid === props.workingGUID
            )

            if (customer) {
                setfirstName(customer.firstName)
                setlastname(customer.lastName)
                setcity(customer.city)
                setstate(customer.state)
                setcountry(customer.country)
                settotal(customer.total)
            }
        }
        else {
            setfirstName("")
            setlastname("")
            setstreet("")
            setcity("")
            setnumber("")
            setstate("")
            setcountry("")
            settotal("")
            setModalTitle("Novo cliente")
        }
    }

    const updateAddCustomer = () => {
        if (props.workingGUID) {
            props.updateCustomer(props.workingGUID, {
                guid: props.workingGUID,
                firstName,
                lastName: lastname,
                city,
                state,
                country,
                registered: getToday(),
                total: total
            })
        }
        else {
            props.addCustomer({
                guid: uuidv4(),
                firstName,
                lastName: lastname,
                city,
                state,
                country,
                registered: getToday(),
                total: 0
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
            onAfterOpen={getCustomer}
        >
            <h2>{modalTitle}</h2>
            <hr className="solid"></hr>
            <h3>Informações pessoais</h3>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput
                    label="Primeiro nome"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
                <CustomTextInput
                    label="Ultimo nome"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                />
            </div>
            <h3>Endereço</h3>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput
                    label="Bairro"
                    value={district}
                    onChange={(e) => setdistrict(e.target.value)}
                />
                <CustomTextInput
                    label="Cidade"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                />
            </div>
            <div className="d-grid grid-1-1 gap-10">
                <CustomTextInput
                    label="Estado"
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                />
                <CustomTextInput
                    label="País"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                />
            </div>
            <div className="grid-gap-10 d-flex align-items-center just-content-end">
                <CustomButton
                    title="Cancelar"
                    icon={<FiSkipBack />}
                    onClick={props.onClose}
                />
                <CustomButton title="Salvar" icon={<FiSave />} sucess onClick={updateAddCustomer}/>
            </div>
        </Modal>
    )
}

export default EditCustomerModal
