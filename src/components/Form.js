import React, {useState} from 'react';
import Error from './Error'

const Form = ({setSearch}) => {

    const [keyWord, setKeyWord] = useState('');
    const [error, setError] = useState(false)

    const searchImages = (e) => {
        e.preventDefault();

        if(keyWord.trim() === ''){
            setError(true);
            return;
        }

        setError(false);
        setSearch(keyWord);
    }

    return ( 
        <form
            onSubmit={searchImages}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        placeholder='Find an image, e.g: "Football", "Coffee"'
                        className='form-control form-control-lg'
                        onChange={e => setKeyWord(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit" 
                        value="Find" 
                        className="btn btn-lg btn-danger btn-block"
                    />
                </div>
            </div>
            {error ? <Error msg='Type a word to start the search...'/> : null}
        </form>
    );
}
 
export default Form;