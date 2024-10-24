import { formatCurrency } from "../helpers"
import { MenuItems } from "../types"


type menuItemsProps = {
    item : MenuItems
    addItem : (item : MenuItems) => void
}

export default function MenuItem({item, addItem} : menuItemsProps) {
  
  return (
    <button onClick={() => addItem(item)} className="border-2 border-indigo-500 hover:bg-indigo-200 p-3 w-full flex justify-between">
      <p>{item.name}</p>
      <p className="font-black"> {formatCurrency(item.price)}</p>
    </button>
  )
}
