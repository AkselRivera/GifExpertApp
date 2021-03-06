import React from 'react';


export default function GifGridItem( {id,title,url} ) {

  return( 
  <div className='card animate__animated animate__fadeInDown'>
         <img src={url} alt={title} />
         <p className='animate__animated animate__fadeInDown'>{title}</p>
  </div>);
}
