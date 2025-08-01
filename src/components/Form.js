import { useState } from 'react';

function Form({ onAddExpense, isEdit, editData, onUpdateExpense }) {
  const [description, setDecription] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();

    if (!description || !amount) return;

    const data = [description, amount];

    isEdit ? onUpdateExpense(data) : onAddExpense(data);

    setDecription('');
    setAmount('');
  }

  return (
    <form className='form' onSubmit={handleSubmitForm}>
      <input
        type='text'
        placeholder='Description ...'
        name='description'
        value={description}
        onChange={(e) => setDecription(e.target.value)}
      />
      <input
        type='number'
        placeholder='amount'
        name='amount'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button className='btn'> Add Expense </button>
    </form>
  );
}

export default Form;
