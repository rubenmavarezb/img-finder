import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImgList from './components/ImgList';


function App() {

  const [search, setSearch] = useState('');
  const [images, saveImages] = useState([])
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(1)

  useEffect(() => {
    if(search === '') return;

    const APIget = async () =>{
      const imgPerPage = 30;
      const key = '18377341-a1f0da81b1710777693066b3f';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imgPerPage}&page=${activePage}`;
      const response = await fetch(url);

      const result = await response.json();
      console.log(result)

      saveImages(result.hits);
      const calculateTotalPages = Math.ceil(result.totalHits / imgPerPage);
      setPages(calculateTotalPages);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }
    APIget();
  }, [search, activePage])

  const previousPage = () => {
    const newActivePage = activePage - 1;
    if(newActivePage === 0) return;
    setActivePage(newActivePage);
  }
  const nextPage = () =>{
    const newActivePage = activePage + 1;
    if(newActivePage > pages) return;
    setActivePage(newActivePage);
  }

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className="lead text-center">Image finder</p>

        <Form
          setSearch={setSearch}
        />
      </div>

      <div className="row justify-content-center">
        <ImgList
          images={images}
        />
        {(activePage === 1) ? null : (
          <button 
            type="button" 
            className="btn btn-info mr-1"
            onClick={previousPage}

          >&laquo; Previous </button>
        )}
        {(activePage === pages) ? null : (
          <button 
            type="button" 
            className="btn btn-info mr-1"
            onClick={nextPage}

          >Next &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;
