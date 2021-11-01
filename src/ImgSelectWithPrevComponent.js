import React, { Component } from 'react';

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
        let showImage
        if (this.state.file) {
            showImage = <img style={{width: "100%", height: "100%"}} src={this.state.file} alt="" />
        }
        return (
            <form>
                <div>
                    <input type="file" onChange={this.selectImg} />
                </div>
                <div>
                    {showImage}
                </div>
                
            </form>
        )
    }
}

export default ImgSelectWithPrevComponent