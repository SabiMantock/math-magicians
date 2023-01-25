import React, { Component } from 'react';
import calculate from '../logic/calculate';
import {
  NUM_1,
  NUM_2,
  NUM_3,
  NUM_4,
  OPERATOR,
} from '../utils/constants';
import Button from './button/Button';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: null,
      next: null,
      total: null,
    };
    this.handleResult = this.handleResult.bind(this);
  }

  handleResult = (text) => {
    const result = calculate(this.state, text);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="container">
        <div className="cal_result">{next || total || 0}</div>
        <div>
          {OPERATOR.map((item) => (<Button key={item.id} title={item.op} className={`btn-${item.id}`} onClick={() => this.handleResult(item.op)} />))}
        </div>
        <div>
          {NUM_1.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => this.handleResult(item.num)} />))}
        </div>
        <div>
          {NUM_2.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => this.handleResult(item.num)} />))}
        </div>
        <div>
          {NUM_3.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => this.handleResult(item.num)} />))}
        </div>
        <div>
          {NUM_4.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} onClick={() => this.handleResult(item.num)} />))}
        </div>
      </div>
    );
  }
}
