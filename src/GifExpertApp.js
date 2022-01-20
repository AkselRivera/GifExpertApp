import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifExpertApp() {

    // const categorias= ['one punch', 'Goku', 'Naruto'];
    const [categorias, setCategorias] = useState(['Naruto']);

    // const handleAdd = ()=>{
    //     setcategorias((e)=> [e,...categorias]);
    // }
  return <div>
            <h1>GifExpertApp</h1>
            <hr/>

            <AddCategory setCategorias={setCategorias} />

           
           <ol>
               {
                   categorias.map((categoria)=>{
                      return  <GifGrid
                                key={categoria}
                                categoria={categoria}
                                /> 
                   })
               }
           </ol>
        </div>;
}
