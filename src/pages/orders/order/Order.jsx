import React from 'react'
import './order.css'
export default function Order({orderNumber, orderTotalPrice, orderDate, orderStatus, orderImg}) {
  return (
    <div className="order">
    <div className="top-order">
        <div className="order-number order-details">
            <span>رقم الطلب</span>
            <span>{orderNumber}</span>
        </div>
        <div className="order-price order-details">
            <span>سعر الاعلان</span>
            <span>{orderTotalPrice}</span>
        </div>

        <div className="order-date order-details">
            <span>تاريخ الطلب</span>
            <span>{orderDate}</span>
        </div>

        <div className="order-status order-details">
            <span>حالة الطلب</span>
            <span>{orderStatus}</span>
        </div>
    </div>

    <div className="order-img">
        <img src={orderImg} alt="order image" />
    </div>
</div>
  )
}
