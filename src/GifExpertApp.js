
import React, {useState}  from 'react'
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';


export const GifExpertApp = props => {


    const [categories, setcategories] = useState( ['Rick and morty']);

    return (
        <>
          <h4>GifExpertApp(solo ingresa el nombre del gif que quieres buscar)</h4>
         <AddCategory setCategories={ setcategories }/>
          <hr />
          <ol>
              {
                  categories.map( (category, i) => (
                    
                      <GifGrid 
                      key= {category }
                      category={category}
                      />
                  ))
              }
          </ol>
        </>
    )
}


