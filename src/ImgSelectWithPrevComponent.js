import React, { Component } from 'react';
import logo from './tes.jpg';
import axios from 'axios';

class ImgSelectWithPrevComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            searchNumber: ''
        }
        this.selectImg = this.selectImg.bind(this)
    }

    selectImg(e) {
        this.setState({ 
            file: URL.createObjectURL(e.target.files[0])
        })
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

        var hasil;
        axios({
            method: 'post',
            url: `http://api.resmush.it/ws.php?img=$(file)&qlty=$(searchNumber)`,
            responseType: 'stream'
          })
            .then(function (response) {
              hasil = response.dest;
              console.log(hasil);
            });
    }

    render() {
        let showImage = <img src={logo} alt="" style={{width: "400px", height: "400px", display: "inline-block", border: "1px solid #777676", borderRadius: "10px", marginLeft: "3px", marginTop: "20px"}}/>
        if (this.state.file) {
            showImage = <img style={{width: "100%", height: "100%", maxWidth: '400px', maxHeight: '400px', display: "inline-block", border: "1px solid #777676", borderRadius: "10px", marginLeft: "3px", marginTop: "20px"}} src={this.state.file} alt="" />
        }
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center', marginLeft: '60px'}}>
                    Choose or Drag Your Image Here:
                    <input type="file" onChange={this.selectImg} style={{height: "15px", marginLeft: '5px'}} />
                </div>
                <br />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "5px"}}>
                    <div style={{display: "flex", justifyContent: 'center', border: "4.5px solid #666633", borderRadius: "10px", padding: "10px 15px 10px 15px", backgroundColor: '#CCCC80', width: '450px', height: '450px'}}>
                        {showImage}    
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginRight: '10px', fontSize: '15px'}}>Enter Compression Ratio <b>(%)</b>:</div>
                    <input type="tel" value={this.state.searchNumber} onChange={this.handleInputChange} pattern="^-?[0-9]\d*\.?\d*$" style={{width: '5%', textAlign: 'center', height: '15px', border: '1px solid #C0C0C0', borderRadius: '6px', fontSize: '14px'}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick={this.handleSubmit} style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', fontSize: '14px'}}>
                        Compress Now
                    </button>
                </div>
                <br />
            </div>
        )
    }
}

export default ImgSelectWithPrevComponent