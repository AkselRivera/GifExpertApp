import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

function GifGrid( {categoria}) {

    
    const {data,loading} =useFetchGifs( categoria );


  return(
        <>
        <h3 className='animate__animated animate__fadeInDownBig'>{categoria}</h3>

        {loading && <p>loading...</p>}

        <div className='card-grid'>
           {
               data.map( img => (<GifGridItem 
                                        key={img.id}
                                        {...img} />) )
           }

  </div>
  </>);
}

export default GifGrid;
