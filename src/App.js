import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import SectionTitle from './components/SectionTitle';
import Form from './components/Form';
import List from './components/List';
import Balance from './components/Balance';
import { useState } from 'react';

const expensesList = [
  {
    id: '2132d23',
    description: 'Shopping',
    amount: 100,
  },
  {
    id: '2132d232sa',
    description: 'Game',
    amount: 7000,
  },
  {
    id: '2132d23dd',
    description: 'Coffe',
    amount: -20,
  },
  {
    id: '2132d23kas',
    description: 'Beach',
    amount: -140,
  },
];

export default function App() {
  const [list, setList] = useState(expensesList);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  function handleAddExpense(arr) {
    const [description, amount] = arr;

    const newExpense = {
      id: crypto.randomUUID(),
      description,
      amount,
    };

    setList((list) => [newExpense, ...list]);
  }

  function handleDeleteExpense(id) {
    setList((list) => list.filter((expense) => expense.id !== id));
  }

  function handleEditForm(id) {
    setIsEdit(true);

    setEditData(...list.filter((expense) => expense.id === id));
  }

  function handleUpdateExpense(data) {
    console.log(data);

    setIsEdit(false);
    // setList((list) =>
    //   list.map((expense) =>
    //     expense.id === editData.id ? { ...expense, editData } : expense
    //   )
    // );
  }

  return (
    <div className='app'>
      <Header />

      <Main>
        <Section>
          <SectionTitle>Add Expense</SectionTitle>
          <Form
            onAddExpense={handleAddExpense}
            isEdit={isEdit}
            editData={editData}
            onUpdateExpense={handleUpdateExpense}
          />
        </Section>

        <Section>
          <SectionTitle>Expense List</SectionTitle>
          <List
            list={list}
            onDelete={handleDeleteExpense}
            onEditForm={handleEditForm}
          />
        </Section>

        <Section>
          <SectionTitle>Balance</SectionTitle>
          <Balance list={list} />
        </Section>
      </Main>
    </div>
  );
}
