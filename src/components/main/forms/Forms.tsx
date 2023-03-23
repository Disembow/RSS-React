import React from 'react';
import Title from '../../header/Title';
// import Button from './Button';
import Input from './Input';
import './Forms.scss';

export default class Forms extends React.Component {
  render() {
    return (
      <main className="main">
        <Title>{'Forms page'}</Title>
        <Input />
      </main>
    );
  }
}
