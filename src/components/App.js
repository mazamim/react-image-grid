import React from "react";
import reactDom from "react-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
 
state = { images:[] }

    onSumbit = async(value)=>
    {

       
      const response = await axios.get('https://api.unsplash.com/search/photos/',
       {

           params:{query:value.term},
           headers:{
            Authorization: 'Client-ID gQVMOjL4HUqNYan3-z1-I9tKntkqzDD_xrjTXwKYI1Y'
           }
       })
    this.setState({images:response.data.results})
    }


    render() { 
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                  <SearchBar onSumbit={this.onSumbit}/>
                  <ImageList images={this.state.images}/>
            </div>
          
        );
    }
}
 
export default App;
