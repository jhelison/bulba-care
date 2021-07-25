import React from "react"
import { FiEdit } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"

export function TableItem(props) {
    const fullName = () => {
        return props.name
    }

    const formatGuid = () => {
        const GUID = props.guid
        if (GUID.length > 10) {
            return GUID.substr(GUID.length - 10, GUID.length - 1)
        }
    }

    const fullAdress = () => {
        return `${props.city}, ${props.state}, ${props.country}`
    }

    return (
        <div
            className="table-item-container align-items-center d-flex mt-5"
            key={props.key}
        >
            <div className="table-grid">
                <div className="user-button d-flex just-content-center align-items-center">
                    <img className="product-img"
                        src={props.url}
                        alt="user-img"
                    />
                </div>

                <div className="d-flex flex-column">
                    <label className="table-content-text table-content-text-bold">
                        {fullName()}
                    </label>
                    <label className="table-content-text table-content-text-small ">
                        {formatGuid()}
                    </label>
                </div>

                <label className="table-content-text table-content-text-gray">
                    {props.registered}
                </label>

                <label className="table-content-text table-content-text-gray">
                    {props.stock}
                </label>

                <label className="table-content-text table-content-money">
                    {getTotal()}
                </label>

                <div className="d-flex just-content-end gap-10">
                    <TableButton onClick={() => props.deleteProduct(props.guid)} icon={<FiTrash2 size={20} />} />
                    <TableButton onClick={props.onEdit} onClick={() => props.onEdit(props.guid)}
                        icon={<FiEdit size={20} />}
                    />
                </div>
            </div>
        </div>
    )

    function getTotal() {
        return `R$ ` + props.value
    }
}

function TableButton(props) {
    return (
        <div
            onClick={props.onClick}
            className="table-button d-flex just-content-center align-items-center"
        >
            {props.icon}
        </div>
    )
}
