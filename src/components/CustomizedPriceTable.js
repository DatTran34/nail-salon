import { Stack } from '@mui/material'
import React from 'react'
import PriceTableStyle from '../styles/PriceTableStyle'

function CustomizedPriceTable({ table,serviceName }) {
    const priceTableStyle = PriceTableStyle()
    return (
        <div className={priceTableStyle.priceTableContainer}>
            <div className={priceTableStyle.priceTableHeader}>{serviceName}</div>
            {table.map((item, key) => {
                return (<Stack direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    key={key}
                    spacing={2} className={priceTableStyle.priceTableItem}>
                    <div>{item.name}</div>
                    <div>{`$ ${item.price}`}</div>
                   
                </Stack>)
            })}

        </div>
    )
}

export default CustomizedPriceTable
