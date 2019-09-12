import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Search.css'
import Filter from '../../components/Filter';
import Animals from '../../components/Animals';


function Search() {
  return (
    <div>
        Hello World! - Search Available Fosters!
        <Filter />
        <Animals />
    </div>
  );
}

export default Search

