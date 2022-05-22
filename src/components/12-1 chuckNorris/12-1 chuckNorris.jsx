import React from "react";
import axios from "axios"

 

class Exercise12_1 extends React.Component {
  state = { randomJoke: "", getRandomJokeByCategory: "" , typedCat: "", categories : ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]}
  getRandomJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random', {
    })
    console.log(response)
    this.setState({ randomJoke: response.data.value })

  }

  getRandomJokeByCategory = async (e) => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random', {
      params: { category: e.target.innerText },
    })
    this.setState({ getRandomJokeByCategory: response.data.value })
  }

  getRandomJokeByCategory1 = async (e, term) => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random', {
      params: { category: term },
    })
    if (e.key === "Enter") {
      this.setState({ typedCat: response.data.value })    }
  }
  render() {
    // for (let i = 0; i < categoryName.length; i++) {
    //    <button onClick={this.getRandomJokeByCategory}>{i}</button>
    // }
    return (
      <div>
        <button onClick={this.getRandomJoke}>Click me to make you laugh</button>
        <div>
          <h1>{this.state.randomJoke}</h1>
        </div>
        <div className="buttons">
        {/* loop to make all of them at once */}
        {/* <button onClick={this.getRandomJokeByCategory}>animal</button>
          <button onClick={this.getRandomJokeByCategory}>career</button>
          <button onClick={this.getRandomJokeByCategory}>celebrity</button>
          <button onClick={this.getRandomJokeByCategory}>dev</button>
          <button onClick={this.getRandomJokeByCategory}>explicit</button>
          <button onClick={this.getRandomJokeByCategory}>fashion</button>
          <button onClick={this.getRandomJokeByCategory}>food</button>
          <button onClick={this.getRandomJokeByCategory}>history</button>
          <button onClick={this.getRandomJokeByCategory}>money</button>
          <button onClick={this.getRandomJokeByCategory}>movie</button>
          <button onClick={this.getRandomJokeByCategory}>music</button>
          <button onClick={this.getRandomJokeByCategory}>political</button>
          <button onClick={this.getRandomJokeByCategory}>religion</button>
          <button onClick={this.getRandomJokeByCategory}>science</button>
          <button onClick={this.getRandomJokeByCategory}>sport</button>
          <button onClick={this.getRandomJokeByCategory}>travel</button> */}
          {this.state.categories.map(category => {<button key={category} onClick={this.getRandomJokeByCategory}>{category}</button>})}
        </div>
        <div>
          <h1>{this.state.getRandomJokeByCategory}</h1>
        </div>
        <input type="text" onKeyPress={this.getRandomJokeByCategory1}></input>
        <div>
          <h1>{this.state.typedCat}</h1>
        </div>
      </div>

    );
  }
}
export default Exercise12_1;



// {this.state.categories.map((category) => {
//   return (
//     <button
//       onClick={() => {
//         this.getRandomJokeByCategory(category);
//       }}
//     >
//       {category}
//     </button>
//   );
// })}
