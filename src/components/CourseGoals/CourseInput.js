import React from 'react';
import './CourseInput.css';
import Button from '../UI/Button/Button';
import { useState } from 'react';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');
  // 입력값 검증 상태변수
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHander = (e) => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAdd(enteredText);
    setEnteredText('');
  };

  return (
    <form>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input
          type='text'
          onChange={textChangeHandler}
          value={enteredText}
        />
      </div>
      <Button
        type='submit'
        onClick={formSubmitHander}
      >
        목표 추가하기
      </Button>
    </form>
  );
};

export default CourseInput;
