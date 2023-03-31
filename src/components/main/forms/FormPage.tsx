import React from 'react';
import './FormPage.scss';
import Title from '../../header/Title';
import Form from './NewForm';

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
