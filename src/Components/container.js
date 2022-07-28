import React from "react";
import Day from './day';

const MEALS_ENDPOINT = "https://62c90f400f32635590df8ece.mockapi.io/days";
// endpoint for all classes
export default class Container extends React.Component {
  constructor(props) { /*pass to super props */
    super(props);
    this.addNewMeal = this.addNewMeal.bind(this);
    this.deleteMeal = this.deleteMeal.bind(this);
  } /*bind above methods; methods will be called 
  for adding and deleting meals */
  
  render() { /*iterate through the days of the week with if/else */
    const days = this.state /*variable for iterating through state of days */
    ? this.state.days.map((day, index) => /*pass in day and index arguments */
    <Day /*returning the Day component */
    key={index} /*unique id for each day */
    data={day} /*the day for this data */
    addNewMeal={this.addNewMeal} /*method passed down from props*/
    deleteMeal={this.deleteMeal} />) /*method passed down from props */
    : null; /*if the state is not null, iterate through the days and create a day element; 
    if it's null, it won't render anything */ 
  return (
    <div>
      {days} 
    </div> /*array of days being iterated */
  ); /*return a div with all the days created above */
}
  componentDidMount(){ /* here make asynchronous calls*/
  fetch(MEALS_ENDPOINT)
    .then(res => res.json())
    .then(data => { /*when data comes back we call setState */
      this.setState ({
        days: data /*data we get back becomes the day in in the current state -- 
        grabs the days */
      }); 
    });
  }

  deleteMeal(e, day, meal) { /* e is the default action when the browser handles an event */
    const index = day.meals.indexOf(meal); /*index identifies which meal we will delete */
    day.meals.splice(index, 1); /*we are splicing out meal at index, and only splicing one of them */
    updateDay(day) /*taking array we have in memory and removing a meal and updating day */
      .then(() => { /* here we send HTTP request to make this permanent in the database that our API is 
      wrapping around*/
        this.setState(state => { /*passing in day through the updateDay method */
          for (let d of state.days){ /* iterate over days in previouse state*/
            if (d.id === day.id) {
              let d = day;
              break; /*iterate through days in 
              previous state and when we find 
              day id we want to update we set 'd' 
              to it and this will be new state 
              object(updated day) and return new 
              state with updated day */
            }
          }
          return state;
        }); 
      });
      e.preventDefault();
  } 

  addNewMeal(e, day, meal) { /*here we push a new meal to the day */
    day.meals.push(meal)
    updateDay(day)
      .then(() => {
        this.setState(state => {
          for (let d of state.days){ 
            if (d.id === day.id) {
              let d = day;
              break;
            } /*here we call update day and display new data
            once the day is updated to rerender it in the UI */
          }
          return state;
        }); 
      });/* with addMeal, we want to push this new meal to 
      the day*/  
      e.preventDefault();/*this is the default 
      action that any event the browser 
      fires off is going to take */
  } 
} 
 

function updateDay(day) { /*using updateDay from above in this function */
  return fetch(`${MEALS_ENDPOINT}/${day.id}`, {
    method: 'PUT', /*update day and change meals */
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(day)
  }); /*whatever day is passed into this method, send a 
  "PUT" request and send the day back to the server to be 
  updated in the database*/
} /*whether we add or delete a meal, we perform a 'PUT' request, update and change meals on the day*/
