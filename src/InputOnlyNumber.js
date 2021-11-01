import React from 'react';

class InputOnlyNumber extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchNumber: ''
        }
    }

    handleInputChange = (event) => {
        const val = event.target.value;

        if (event.target.validity.valid) this.setState({
            searchNumber: event.target.value
        });
        else if (val === '' || val === '-') this.setState({
            searchNumber: val
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var searchNumber = this.state.searchNumber;

        window.location.href = "https://youtube.com/results?search_query=" + searchNumber;
    }

    render() {
        return (
            <div>
                <input type="tel" value={this.state.searchNumber} onChange={this.handleInputChange} pattern="^-?[0-9]\d*\.?\d*$" />
                <button onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}

export default InputOnlyNumber