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
        and its value, set the meal time value to that */ 
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
               <div>
                    <div className="text-center">
                      <input type="text" placeholder="breakfast, lunch, dinner" onChange={this.handleTimeChange} value={this.state.timeValue}/> &nbsp;&nbsp;
                      <input type="text" placeholder="list all foods for the meal" onChange={this.handleItemChange} value={this.state.itemValue}/>  
                      <br/> <br /> 
                    </div>                  

                    <div>
                      <button className="btn btn-success col-md-12 text-center" onClick={this.handleClick}>Add Meal</button>
                    </div>  
                    
               </div>/*on click will handle the event and it will have
                the data based on that event */
            ) /*anytime the name changes, it will update the name value that the
            handleNameChange method tells it to do */ 
        } /*tying the value in the input the user sees 
        to the variable in the new meals state */
    }
    

    