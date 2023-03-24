import React from 'react';
import './Forms.scss';
import Title from '../../header/Title';
import Input from './Input';

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
