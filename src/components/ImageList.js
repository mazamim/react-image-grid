import './ImageList.css'
import './ImageCard'
import React from 'react'
import ImageCard from './ImageCard'


const ImageList = ({images}) => {
   
  const returnImages = images.map((image)=>{
        return (
    
                // <img key={image.id}  src={image.urls.regular} />
    <ImageCard key={image.id} image={image}/>
         
            
        ) 
  })
   
    return (
        <div className='image-list'>
           {returnImages}
        </div>
    )
}

export default ImageList
