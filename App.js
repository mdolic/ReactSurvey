import React from 'react';
import Survey from './Survey';

class App extends React.Component {

    constructor() {
        super();
        //setting initial state here with and array of dropdown items:
        //setting objects dropdownitem1
       this.state = {
            dropdownItems: ["1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"],

        };
          //this binds data
        this.updateDropdown = this.updateDropdown.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
      //form action here
    updateDropdown(index, event) {
        const dropdown = event.target.value;
        const dropDownIndex = this.state.dropdownItems.indexOf(dropdown);
        this.setState({
            dropdownItems: [
                ...this.state.dropdownItems.slice(0, dropDownIndex),
                ...this.state.dropdownItems.slice(dropDownIndex + 1)
            ],
            [`dropdown${index}`]: dropdown
        });


    //reset form
    resetForm(){
        this.setState({
            dropdownItems: ["1. Best time", "2. Next Best time", "3. Not as good", "4. Worst time"]
         });


        }

    render(){
        return (
            <div>
                <h2>WDV321 Advanced JS</h2>
                <h2>React Survey Form</h2>
                <form name="form1" method="post" action="">
                    <fieldset>
                        <p>
                            <label>Email:
                                <input type="text" name="cust_email" id="cust_email"/>
                            </label>
                        </p>
                        <p>Please rate the following times from best (1) to worst (4)</p>
                        <p>
                            <Survey
                                        items={this.state.dropdownItems} //selects state
                                      selected={this.state.dropdown1} //selects the drop down 2 item
                                       updateDropDownItems={this.updateDropdown.bind(this, 1)} //updates item 1
                                       />
                            Monday/Wednesday 10:10am-Noon
                        </p>
                        <p>
                            <Survey
                                      items={this.state.dropdownItems} //selects state
                                       selected={this.state.dropdown2} //selects the dropdown 2 item
                                       updateDropDownItems={this.updateDropdown.bind(this, 2)} //updates 2 item
                                       />
                            Tuesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <Survey
                                      items={this.state.dropdownItems} //selects state
                                       selected={this.state.dropdown3} //selects dropdown 3 item
                                       updateDropDownItems={this.updateDropdown.bind(this, 3)}//updates 3 item
                                       />
                            Wednesday 6:00pm-9:00pm
                        </p>
                        <p>
                            <Survey
                                        items={this.state.dropdownItems} //selects states
                                       selected={this.state.dropdown4} //selects dropdown 3 item
                                       updateDropDownItems={this.updateDropdown.bind(this, 4)} //updates 3 item
                                       />
                            Tuesday/Thursday 10:10am-Noon
                        </p>
                        <p>
                            <input type="submit" name="button" id="button" value="Submit"/>
                            <input type="reset" name="button2" id="button2" value="Reset" onClick={this.resetForm}/>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}
}
export default App;
