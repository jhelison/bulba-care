import React, { useEffect, useState } from "react"
import "./Customers.css"

import Content from "../../components/template/Dashboard/Content"

import { TableItem } from "./TableItem"
import { tableData } from "./tableData"

import { TableButton } from "./TableItem"

import { FiUserPlus } from "react-icons/fi"

import EditCustomerModal from "./EditCustomerModal"

const Customers = (props) => {
    const [isModal, setIsModal] = useState(false)
    const [customersList, setCustomersList] = useState([])
    const [workingGUID, setWorkingGUID] = useState(null)

    useEffect(() => {
        const customers = localStorage.getItem("customers")
        if (customers === null) {
            localStorage.setItem("customers", JSON.stringify(tableData))
        }
        getItems()
    }, [])

    const getItems = () => {
        const customers = localStorage.getItem("customers")
        setCustomersList(JSON.parse(customers))
    }

    const deleteItem = (guid) => {
        const filteredList = customersList.filter((value) => {
            return value.guid != guid
        })
        localStorage.setItem("customers", JSON.stringify(filteredList))
        setCustomersList(filteredList)
    }

    const updateCustomer = (guid, newCustomer) => {
        const customer = customersList.find((value) => value.guid === guid)

        if (customer) {
            const index = customersList.indexOf(customer)
            let newCustomerList = customersList
            newCustomerList[index] = newCustomer
            localStorage.setItem("customers", JSON.stringify(newCustomerList))
            setCustomersList(newCustomerList)
        }
    }

    const addCustomer = (customer) => {
        const customers = customersList
        customers.push(customer)
        localStorage.setItem("customers", JSON.stringify(customers))
        setCustomersList(customers)
    }

    const onEdit = (guid) => {
        setWorkingGUID(guid)
        setIsModal(true)
    }

    const buildTable = () => {
        return customersList.map((data) => {
            return (
                <TableItem
                    {...data}
                    deleteItem={deleteItem}
                    onEdit={onEdit}
                    key={data.guid}
                />
            )
        })
    }

    const onClose = () => {
        getItems()
        setIsModal(false)
    }

    const addNewCustomer = () => {
        setWorkingGUID(null)
        setIsModal(true)
    }

    return (
        <Content title="Clientes">
            <EditCustomerModal
                isOpen={isModal}
                onClose={onClose}
                workingGUID={workingGUID}
                updateCustomer={updateCustomer}
                addCustomer={addCustomer}
            />
            <div className="d-flex just-content-end">
                <TableButton
                    icon={<FiUserPlus size={20} />}
                    onClick={addNewCustomer}
                />
            </div>
            <div
                className="table-item-container align-items-center d-flex mt-5"
                key={props.key}
            >
                <div className="table-grid">
                    <div></div>
                    <label className="table-content-text table-content-text-bold">
                        Cliente
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Última Atualização
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Endereço
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Total comprado
                    </label>
                    <label className="table-content-text table-content-text-bold d-flex just-content-end">
                        Ações
                    </label>
                </div>
            </div>
            {buildTable()}
        </Content>
    )
}

export default Customers
