// rrd imports 
import { Link, useFetcher } from "react-router-dom"

// helpers func
import { formatCurrency, formatDate, getAllMatchingItems } from "../helpers"
// library import
import { TrashIcon } from "@heroicons/react/24/outline"

const ExpenseItem = ({ expense, showBudget }) => {
    const fetcher = useFetcher()

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budgetId,
    })[0]

  return (
    <>
        <td>{expense.name}</td>
        <td>{formatCurrency(expense.amount)}</td>
        <td>{formatDate(expense.createdAt)}</td>
        {showBudget && (<td>
            <Link 
            to={`/budget/${budget.id}`}
            style={{
                "--accent": budget.color,
            }}
            >
            {budget.name}
            </Link>
        </td>)}
        <td>
            <fetcher.Form method="post">
                <input type="hidden" name="_action" value="deleteExpense" />
                <input type="hidden" name="expenseId" value={expense.id} />
                <button type="submit" className="btn btn--warning" aria-label={`Delete ${expense.name} expense`}>
                    <TrashIcon width={20} />
                </button>
            </fetcher.Form>
        </td>
    </>
  )
}

export default ExpenseItem