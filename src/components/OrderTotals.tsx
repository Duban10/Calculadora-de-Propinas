import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number,
    orderPlaced: () => void
}

const OrderTotals = ({order, tip, orderPlaced} : OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order] )
    const tipAmount = useMemo(() => subtotalAmount * tip, [order, tip])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [order, tip])

    // const subtotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order] )
    // const tipAmount = useCallback(() => subtotalAmount() * tip, [order, tip])

    return (
        <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                {/* <span className="font-bold">{formatCurrency(subtotalAmount())}</span> */}
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
                {/* <span className="font-bold">{formatCurrency(tipAmount())}</span> */}
            </p>

            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
                {/* <span className="font-bold">{formatCurrency(tipAmount() + subtotalAmount())}</span> */}
            </p>
        </div>
        <button className="w-full bg-blue-900 p-3 uppercase text-white font-bold mt-10" disabled={totalAmount === 0}  onClick={() => orderPlaced()}
        >
            Guardar Orden
        </button>
        </>
    )
}

export default OrderTotals
