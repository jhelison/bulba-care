import React, { useEffect, useState } from "react"
import "../Customers.css"

import Content from "../../../components/template/Dashboard/Content"

import { TableItem } from "./productTableItem"
import { tableData } from "./productData"

import { TableButton } from "../TableItem"
import { FiPlus } from "react-icons/fi";

import EditProductModal from "./EditProductModal"
import { useHistory } from "react-router-dom"

const Products = (props) => {
    const history = useHistory()
    const [isModal, setIsModal] = useState(false)
    const [productsList, setProductsList] = useState([])
    const [workingProduct, setWorkingProduct] = useState(null)

    useEffect(() => {
        exitIfNotName()
        const products = localStorage.getItem("products")
        if (products === null) {
            localStorage.setItem("products", JSON.stringify(tableData))
        }
        getProducts()
    }, [])

    const exitIfNotName = () => {
        const username = localStorage.getItem("username")
        if(!username){
            history.push('/login')
        }
    }

    const getProducts = () => {
        const products = localStorage.getItem("products")
        setProductsList(JSON.parse(products))
    }

    const deleteProduct = (guid) => {
        const filteredList = productsList.filter((value) => {
            return value.guid != guid
        })
        localStorage.setItem("products", JSON.stringify(filteredList))
        setProductsList(filteredList)
    }

    const updateProduct = (guid, newProduct) => {
        const product = productsList.find((value) => value.guid === guid)

        if (product) {
            const index = productsList.indexOf(product)
            let newProductList = productsList
            newProductList[index] = newProduct
            localStorage.setItem("products", JSON.stringify(newProductList))
            setProductsList(newProductList)
        }
    }

    const addProduct = (product) => {
        const products = productsList
        products.push(product)
        localStorage.setItem("products", JSON.stringify(products))
        setProductsList(products)
    }

    const addNewProduct = () => {
        setWorkingProduct(null)
        setIsModal(true)
    }

    const buildTable = () => {
        return productsList.map((data) => {
            return (
                <TableItem
                    {...data}
                    deleteProduct={deleteProduct}
                    onEdit={onEdit}
                    key={data.guid}
                />
            )
        })
    }

    const onEdit = (guid) => {
        setWorkingProduct(guid)
        setIsModal(true)
    }

    const onClose = () => {
        getProducts()
        setIsModal(false)
    }

    return (
        <Content title="Produtos">
            <EditProductModal
                isOpen={isModal}
                onClose={onClose}
                workingProduct={workingProduct}
                updateProduct={updateProduct}
                addProduct={addProduct}
            />
            <div className="d-flex just-content-end">
                <TableButton
                    icon={<FiPlus size={20} />}
                    onClick={addNewProduct}
                />
            </div>
            <div
                className="table-item-container align-items-center d-flex mt-5"
                key={props.key}
            >
                <div className="table-grid">
                    <div></div>
                    <label className="table-content-text table-content-text-bold">
                        Produto
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Data do cadastro
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Estoque
                    </label>
                    <label className="table-content-text table-content-text-bold">
                        Valor
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

export default Products
