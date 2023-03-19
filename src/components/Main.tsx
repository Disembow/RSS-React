import React from 'react';
import Title from './Title';
import './Main.css';

type TState = {
  input: string;
};

export default class Main extends React.Component {
  state: TState = { input: localStorage.getItem('RSTaskMessage') || '' };

  componentWillUnmount(): void {
    localStorage.setItem('RSTaskMessage', JSON.stringify(JSON.parse(this.state.input)));
  }

  handleInputValue(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    this.setState({ input: e.target.value });
    console.log(e.target.value);
  }

  getLSData(): string {
    return this.state.input ? JSON.parse(this.state.input) : '';
  }

  render() {
    return (
      <main className="main">
        <Title>{'Home page'}</Title>
        <div className="search light-block">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            value={this.getLSData()}
            onChange={this.handleInputValue}
          />
          <span className="search__icon"></span>
        </div>
      </main>
    );
  }
}
