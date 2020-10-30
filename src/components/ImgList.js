import React from 'react';
import Img from './Img';

const ImgList = ({images}) => {
    return ( 
        <div className='col-12 p-5 row'>
            {images.map(image =>(
                <Img
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
     );
}
 
export default ImgList;