import React from 'react';
import Title from '../header/Title';
import Cards from './Cards';
import './Main.scss';

type TState = {
  input: string;
};

export default class Main extends React.Component {
  state: TState = { input: localStorage.getItem('RSTaskMessage') || '' };

  componentWillUnmount(): void {
    if (this.state.input === '') {
      localStorage.setItem('RSTaskMessage', '');
    } else {
      localStorage.setItem('RSTaskMessage', this.state.input.toString());
    }
  }

  handleInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  getLSData(): string {
    // return this.state.input ? JSON.parse(this.state.input) : '';
    console.log(this.state.input);
    return this.state.input ? this.state.input : '';
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
            data-testid="main-search-bar"
          />
          <span className="search__icon" data-testid="main-search-icon"></span>
        </div>
        <Cards />
      </main>
    );
  }
}
