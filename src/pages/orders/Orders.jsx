import React from 'react'
import './orders.css'
import Order from './order/Order'
export default function Orders() {
  return (
    <main id='orders'>
        <div className="orders-container">
            <div className="top-section">
                <h1 className='orders-title'>طلباتي</h1>
                <div className="line"></div>
            </div>

            <div className="orders">

                    <Order 
                        orderNumber="12345678"
                        orderTotalPrice="2000"
                        orderDate="2022-10-10"
                        orderStatus="مكتمل"
                        orderImg="https://i.ibb.co/0m7wYgK/IMG-20220615-WA0000.jpg"
                    />
                
                    <Order 
                        orderNumber="12345678"
                        orderTotalPrice="2000"
                        orderDate="2022-10-10"
                        orderStatus="مكتمل"
                        orderImg="https://i.ibb.co/0m7wYgK/IMG-20220615-WA0000.jpg"
                    />
                
                    <Order 
                        orderNumber="12345678"
                        orderTotalPrice="2000"
                        orderDate="2022-10-10"
                        orderStatus="مكتمل"
                        orderImg="https://i.ibb.co/0m7wYgK/IMG-20220615-WA0000.jpg"
                    />
                

            </div>

        </div>
    </main>
  )
}
