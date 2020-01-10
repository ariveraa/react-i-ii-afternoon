import React, {Component} from 'react'

class Buttons extends Component{
    constructor(){
        super()
        this.nextClick = this.nextClick.bind(this)
        this.previousClick = this.previousClick.bind(this)
    }
    nextClick(){
        if(this.props.index < 24){
            this.props.nextFn()
        }
        else{
            alert('End of Directory')
        }
    }

    previousClick(){
        if(this.props.index > 0){
            this.props.previousFn()
        }

    }


    render(){
        return(
            
            <div className = 'buttons'>
    <button  className = 'direction'onClick = {this.previousClick}>  {'<'}Previous</button>
                <section className ='center-buttons'>
                    <button className ='cool'>Edit</button>
                    <button className ='cool'>Delete</button>
                    <button className ='cool'>New</button>
                </section>
                <button className = 'direction' onClick = {this.nextClick}>Next{'>'} </button>
            </div>
        )
    }
}

export default Buttons