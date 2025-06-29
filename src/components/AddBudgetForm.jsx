// rrd imports
import { Form, useFetcher } from 'react-router-dom'
// react imports
import { useEffect, useRef } from 'react';
// library
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting';

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(() => {
        if (!isSubmitting) {
            formRef.current.reset();
            focusRef.current.focus();
        }
    },[isSubmitting])
    return (
    <div className='form-wrapper'>
        <h2 className='h3'>
            Create budget
        </h2>
        <fetcher.Form className='grid-sm' method='post' ref={formRef}>
            <div className="grid-xs">
                <label htmlFor="newBudget">Budget Name</label>
                <input 
                type="text" 
                name='newBudget' 
                id='newBudget'
                placeholder='e.g. Groceries, Rent, etc.'
                required
                ref={focusRef}
                />
            </div>
            <div className="grid-xs">
                <label htmlFor="newBudgetAmount">Amount</label>
                <input 
                type="Number" 
                step="0.01" 
                name='newBudgetAmount' 
                id ="newBudgetAmount" 
                placeholder='e.g , $299' 
                required
                inputMode='decimal'
                />
            </div>
            <input type="hidden" name="_action" value="createBudget" />
            <button 
            className='btn btn--dark' 
            type='submit'
            disabled={isSubmitting}
            >
                {
                    isSubmitting ? <span>Creating Budget...</span> : (
                        <>
                            <span>Create Budget</span>
                            <CurrencyDollarIcon className='icon' width={20} />
                        </>
                    )
                }
            </button>        
        </fetcher.Form>
    </div>
  )
}

export default AddBudgetForm