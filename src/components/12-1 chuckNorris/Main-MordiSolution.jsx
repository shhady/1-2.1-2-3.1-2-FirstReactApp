//! get specific category
//https://api.chucknorris.io/jokes/random?category={category}

//! list of available categories
//https://api.chucknorris.io/jokes/categories
import React, { Component } from 'react';
import axios from 'axios';
import LargeHeading from './largeHeading/LargeHeading';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomJoke: '',
      displayedJoke: '',
      categories: [],
      isSpinning: true,
      listOfJokes: [],
    };
  }
  // state = { randomJoke: '', categories: [], isSpinning: true };

  async componentDidMount() {
    const { data } = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    this.setState({ categories: data, isSpinning: false });
  }

  fetchJoke = async (url = '') => {
    try {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random${url}`
      );
      return data.value;
    } catch (err) {
      console.error(err);
    }
  };
  // fetchJoke = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://api.chucknorris.io/jokes/random'
  //     );
  //     return data.value;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // fetchJokeCat = async (category) => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.chucknorris.io/jokes/random?category=${category}`
  //     );
  //     return data.value;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  handleRandomJoke = async () => {
    this.setState({ randomJoke: await this.fetchJoke() });
  };
  handleFetchCat = async (category) => {
    // const joke = await this.fetchJokeCat(category);
    // const joke = await this.fetchJoke(`?category=${category}`);
    this.setState({
      displayedJoke: await this.fetchJoke(`?category=${category}`),
    });
    // console.log(joke);
  };
  handleInputPress = async (event) => {
    if (event.key === 'Enter') {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${event.target.value}`
      );
      console.log(data);
      // this.setState({ listOfJokes: data.result });
    }
  };
  render() {
    return (
      <div>
        <input onKeyPress={this.handleInputPress} />
        <button onClick={this.handleRandomJoke}>Get random Joke</button>
        <LargeHeading text={this.state.randomJoke} />
        <br />
        <br />
        {this.state.isSpinning && <LargeHeading text={'Amazing Spinner'} />}
        {this.state.categories.map((category) => (
          <button key={category} onClick={() => this.handleFetchCat(category)}>
            {category}
          </button>
        ))}
        <LargeHeading text={this.state.displayedJoke} />
        {this.state.listOfJokes.map((joke) => (
          <p>{joke.value}</p>
        ))}
      </div>
    );
  }
}
