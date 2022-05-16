import React from 'react'
class Exercise6 extends React.Component{
    render() {
    return (
        <div style={{border:"1px solid black", width:400, height:400, marginLeft: 100}}>
            <div style = {{width:400}}>
                <img src={this.props.img} alt="nothing" width="100%" height="300"/>
            </div>
            <div>
                {this.props.randomTitle}
            </div>
            <div>
                {this.props.randomDescription}
            </div>
            <div>
                <button>Share</button>
                <button>Explore</button>

            </div>
        </div>

    )
}
}
export default Exercise6;