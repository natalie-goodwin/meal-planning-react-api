import React from "react";
import NewMealsForm from "./new-meals-form";

export default class Day extends React.Component {
 render() { /*day will use new meals form which is imported above */
    const meals = this.props.data.meals /*if there are meals this will be the array */
    ? this.props.data.meals.map((meal, index) => /*meals will be added if they exist, along with a meal time 
    and item */ 
        <ul key={index}>
           <h3>Meal Time:</h3> {meal.time} <h3>Item:</h3> {meal.item} <br /><br /> 
            <button className="btn btn-danger" onClick={e =>
            this.props.deleteMeal(e, this.props.data, meal) 
        }>Delete Meal</button> <br/>
        </ul>) 
        
    : null; /* created a list element for each meal above with a button
    that allows a delete event; pass in deleteMeal prop from container into 
    each meal; the props allows for passing methods; 
    allow for null in case there are no meals*/
    return (/*the data below is the day itself; 
    name is the name of the specific day; 
    returning array of meals below; also 
    returning the newMealsForm  */

    <div className="container">        
       <div className="row">            
          <div className="col-sm-6">
            
            <div className="card border-primary mb-3">
              <div className="card-header bg-transparent border-primary text-primary">
                <h3>{this.props.data.name}</h3>
              </div>  
            
            <div className="card-body text-primary">
                <h5 className="card-title">
                    <ul>
                      {meals} <br/>
                    </ul></h5>    
            </div>
  
            <div className="card-footer bg-transparent border-primary">
                    <NewMealsForm
                    addNewMeal={this.props.addNewMeal} data={this.props.data} />
                    <br/>            
            </div>       

            </div>            
          </div>
       </div>
    </div>       
    
       /*pass the component
        that came from the parent component in
        container.js into this component in the NewMealsForm; the
        form will also have access to the data to know which data to add to request  */ 
    );
 }
} 