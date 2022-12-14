import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: '0',
    operation: '',
  });
  const { total, next, operation } = state;

  const showClick = (event) => {
    const btnValue = event.target.innerText;
    setState((state) => calculate(state, btnValue));
  };

  const screenText = next || total || operation || '0';
  return (
    <div className="wrapper">
      <div className="row1">{screenText}</div>
      <div className="row2">
        <div className="row2-col1" onClick={showClick} role="presentation">AC</div>
        <div className="row2-col2" onClick={showClick} role="presentation">+/-</div>
        <div className="row2-col3" onClick={showClick} role="presentation">%</div>
        <div className="row2-col4" onClick={showClick} role="presentation">÷</div>
      </div>
      <div className="row3">
        <div className="row3-col1" onClick={showClick} role="presentation">7</div>
        <div className="row3-col2" onClick={showClick} role="presentation">8</div>
        <div className="row3-col3" onClick={showClick} role="presentation">9</div>
        <div className="row3-col4" onClick={showClick} role="presentation">x</div>
      </div>
      <div className="row4">
        <div className="row4-col1" onClick={showClick} role="presentation">4</div>
        <div className="row4-col2" onClick={showClick} role="presentation">5</div>
        <div className="row4-col3" onClick={showClick} role="presentation">6</div>
        <div className="row4-col4" onClick={showClick} role="presentation">-</div>
      </div>
      <div className="row5">
        <div className="row5-col1" onClick={showClick} role="presentation">1</div>
        <div className="row5-col2" onClick={showClick} role="presentation">2</div>
        <div className="row5-col3" onClick={showClick} role="presentation">3</div>
        <div className="row5-col4" onClick={showClick} role="presentation">+</div>
      </div>
      <div className="row6">
        <div className="row6-col1" onClick={showClick} role="presentation">0</div>
        <div className="row6-col2" onClick={showClick} role="presentation">.</div>
        <div className="row6-col3" onClick={showClick} role="presentation">=</div>
      </div>
    </div>
  );
};

export default Calculator;
