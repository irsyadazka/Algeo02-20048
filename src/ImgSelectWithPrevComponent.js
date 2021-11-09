import React, { Component } from 'react';
import logo from './tes.jpg';

class ImgSelectWithPrevComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.selectImg = this.selectImg.bind(this)
    }

    selectImg(e) {
        this.setState({ 
            file: URL.createObjectURL(e.target.files[0])
        })
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
                <br />
            </div>
        )
    }
}

export default ImgSelectWithPrevComponent