import React, { useState } from "react"
import "../Customers.css"

import Content from "../../../components/template/Dashboard/Content"

import { TableItem } from "./productTableItem"
import { tableData } from "./productData"

import EditProductModal from "./EditProductModal"

const Products = (props) => {
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
        <Content title="Produtos">
            <EditProductModal isOpen={isModal} onClose={() => setIsModal(false)}/>
            <div className="table-item-container align-items-center d-flex mt-5" key={props.key}>
                <div className="table-grid">
                    <div></div>
                    <label className="table-content-text table-content-text-bold">Produto</label>
                    <label className="table-content-text table-content-text-bold">Data do cadastro</label>
                    <label className="table-content-text table-content-text-bold">Estoque</label>
                    <label className="table-content-text table-content-text-bold">Valor</label>
                    <label className="table-content-text table-content-text-bold d-flex just-content-end">Ações</label>
                </div>
            </div>
            {buildTable()}
        </Content>
    )
}

export default Products
