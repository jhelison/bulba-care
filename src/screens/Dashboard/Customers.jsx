import React, { useState } from "react"
import "./Customers.css"

import Content from "../../components/template/Dashboard/Content"

import { TableItem } from "./TableItem"
import { tableData } from "./tableData"

import EditCustomerModal from "./EditCustomerModal"

const Customers = (props) => {
    const [isModal, setIsModal] = useState(false)

    const onEdit = () => {
        setIsModal(true)
    }

    const buildTable = () => {
        return tableData.map((data) => {
            return <TableItem {...data} onEdit={onEdit} key={data.guid}/>
        })
    }

    return (
        <Content title="Clientes">
            <EditCustomerModal isOpen={isModal} onClose={() => setIsModal(false)}/>
            <div className="table-item-container align-items-center d-flex mt-5" key={props.key}>
                <div className="table-grid">
                    <div></div>
                    <label className="table-content-text table-content-text-bold">Cliente</label>
                    <label className="table-content-text table-content-text-bold">Data do cadastro</label>
                    <label className="table-content-text table-content-text-bold">Endereço</label>
                    <label className="table-content-text table-content-text-bold">Total comprado</label>
                    <label className="table-content-text table-content-text-bold d-flex just-content-end">Ações</label>
                </div>
            </div>
            {buildTable()}
        </Content>
    )
}

export default Customers
