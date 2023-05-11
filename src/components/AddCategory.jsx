import { useState } from 'react';
// import * as R from 'ramda';
export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (item) => setInputValue(R.path(['target', 'value'], item));
    const handleInputChange = ( { target: { value } } ) => setInputValue(value);
    // const handleInputChange = (event) => {setInputValue(event.target.value);}

    const onSubmit = (event) => {
        event.preventDefault();
        
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories( categories => [ ...categories, inputValue ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Escriba una categoría"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
