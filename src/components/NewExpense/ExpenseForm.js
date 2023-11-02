import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState('');
  // const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // setTitle(e.target.value);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
  };

  const priceChangeHandler = (e) => {
    // setPrice(e.target.value);
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    // setDate(e.target.value);
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단
    console.log('submit 버튼을 누름!');

    const newExpense = {
      title: userInput.title,
      price: Number(userInput.price),
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });
    onToggle();
  };

  const cancelInsertHandler = () => {
    console.log('취소 버튼 누름!');
    onToggle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button
          type='button'
          onClick={cancelInsertHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
