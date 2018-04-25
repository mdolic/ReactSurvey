import React from 'react';

class Survey extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const SurveyOptions = this.props.items;
       // console.log(SurveyOptions);
        return (
            <select onChange={this.props.updateDropDownItems} value={this.props.selected}>
                <option>{this.props.selected}</option>
                {
                    SurveyOptions.map( (dropdownItem, key) => {

                        <li key={SurveyOptions.toString()} value={SurveyOptions}>
                        </li>
                        return <option>{dropdownItem}</option>
                    })
                }
            </select>
        )

    }
}
export default Survey;
