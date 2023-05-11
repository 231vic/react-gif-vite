import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'One Punch' ] );

    const onAddCategory = ( newCategory ) => {
        // if (categories.includes(newCategory)) return;
        if (categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories( [ newCategory, ...categories ]  );
        // setCategories( cat => [...cat, 'valorant']  );
    }

    return (
    <>
        {/* {título} */}
        <h1>GifExpertApp</h1>
        {/* {input} */}
        <AddCategory 
            // setCategories = { setCategories } 
            onNewCategory = { onAddCategory }
        />
        {/* {listado de gifs} */}
        { 
            categories.map( (category) => (
                <GifGrid
                    key={category} 
                    category={category}
                />
            )) 
        }
        
            {/* {gif item} */}
        
    </>
    );
}
