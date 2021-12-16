import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack On Titan']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Jujutsu Kaisen'] );
    //     setCategories( cats => [ ...cats, 'Jujutsu Kaisen'] );
    // };

    return (
        <div>
            <h2>GifExpertApp</h2>        
            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ol>
               { 
                    categories.map( category => (
                    
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                        
                    ))
               }
            </ol>

        </div>
    )
}
