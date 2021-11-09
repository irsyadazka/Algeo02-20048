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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginRight: '10px', fontSize: '15px'}}>Enter Compression Ratio <b>(%)</b>:</div>
                    <input type="tel" value={this.state.searchNumber} onChange={this.handleInputChange} pattern="^-?[0-9]\d*\.?\d*$" style={{width: '5%', textAlign: 'center', height: '15px', border: '1px solid #C0C0C0', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={this.handleSubmit} style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', fontSize: '14px'}}>
                        Compress Now
                    </button>
                </div>
            </div>
        )
    }
}

export default InputOnlyNumber