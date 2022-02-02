import React from 'react';

 class ImageCard extends React.Component {
      constructor(props){
        super(props)
        this.imageRef=React.createRef()
        this.state={span:0}
      }

      componentDidMount(){
        // console.log(this.imageRef.current.clientHeight)
        this.imageRef.current.addEventListener('load',this.setSpan)
      
      }

       setSpan =()=>{
         const height=this.imageRef.current.clientHeight
         const span =Math.ceil(height/10)
         this.setState({span})
         console.log(this.state.span)
      }

  render() {
    
    return (
    <div style={{gridRowEnd:`span ${this.state.span}`}}>
      <img
      ref={this.imageRef}
      src={this.props.image.urls.regular}/>
    </div>)
  }
}

export default ImageCard;
