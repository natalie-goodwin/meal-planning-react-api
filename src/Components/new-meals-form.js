import React from "react";


export default class NewMealsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            timeValue: "",
            itemValue: ""
        } /*these will be the values on 
        the new meal; there will be an input
        field mapped to meal time and item values
        in the newMealsForm state */
        
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

        handleTimeChange(e) {
            this.setState({timeValue: e.target.value})
        } /*whatever the target was of the event,
        and its value, we set the meal time value to that */ 
        handleItemChange(e) {
            this.setState({itemValue: e.target.value});
        }
        handleClick(e) {/*calling addNewMeal method that was passed in on 
        props and passing in the event, the data of this day, and the new meal */
            this.props.addNewMeal(e, this.props.data,
            {time: this.state.timeValue, item: this.state.itemValue});
            this.setState({timeValue: "", itemValue: ""});
        } 

        render(){
            return (
                <div className="container sm-6">
                    <input type="text" placeholder="breakfast, lunch, dinner" onChange={this.handleTimeChange} value={this.state.timeValue}/>
                    <button onClick={this.handleClick}>Add Meal</button>
                    <br />
                    <input type="text" placeholder="enter a food for the meal" onChange={this.handleItemChange} value={this.state.itemValue}/>
                    <button onClick={this.handleClick}>Add Meal</button>
                </div> /*on click, will handle the event and it will have
                the data based on that event */
            ) /*anytime the name changes, it will update the name value that the
            handleNameChange method tells it to do */ 
        } /*we are tying the value in the input the user sees 
        to the variable in the new room state */
    }
    

    /*"This" refers to whatever the house or room is that is being passed or called 
    in the current state */