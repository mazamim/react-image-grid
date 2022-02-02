import React, { Component } from 'react'

export default class SearchBar extends Component {

state={term:''}

handleSubmit=(event)=>{
  event.preventDefault()

  this.props.onSumbit(this.state)
             
}

    render() {
        return (
      <div className='ui segmant'>
          <form className='ui form' onSubmit={this.handleSubmit}>
              <div className='field'>
                  <input type='text' 
                  placeholder='Search'
                  onChange={e=>this.setState({term:e.target.value})}
                  />
              </div>

          </form>
      </div>


          
        )
    }
}
