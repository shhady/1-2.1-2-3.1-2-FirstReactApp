import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';


const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];


 
class Exercise13_1 extends React.Component {

    state= {names: [], olderThan90: []}
    allFirstNames = () =>{
        const allNames = data.map((item=>item.name))
        console.log(allNames);
        this.setState({names: allNames.join(",")})
    }
    
    olderThan = ()=>{
        const older = data.filter((item=>{
            return Number(item.birthday.split("-")[2]) < 1990;
        }));
        const final= older.map(obj=>{
            return <div>
                <div>name: {obj.name}</div>
                <div>birthday: {obj.birthday}</div>
                <div>fish: {obj.favoriteFoods.fish.join(", ")}</div>
                <div>meats: {obj.favoriteFoods.meats.join(", ")}</div>
            </div>
        })

    this.setState({olderThan90: final});
    }


   
    render() {
      return (
         
         <div>
             <button onClick={this.allFirstNames}>Show All Names</button>
             <button onClick={this.olderThan}>showme</button>
             <div>{this.state.names}</div>
             <button onClick={this.olderThan}>show me full Object</button>
                <div>{this.state.olderThan90}</div>
        </div>
      
      );
    }
  }
  export default Exercise13_1;
  