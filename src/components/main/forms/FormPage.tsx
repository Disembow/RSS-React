import React from 'react';
import './Forms.scss';
import Title from '../../header/Title';
import Form from './Form';

export default class FormPage extends React.Component {
  render() {
    return (
      <main className="main">
        <Title>{'Forms page'}</Title>
        <Form />
      </main>
    );
  }
}
