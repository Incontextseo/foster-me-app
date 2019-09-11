import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './History.css'
import Filter from '../../components/Filter';
import Animals from '../../components/Animals';


function History() {
  return (
    <div>
        Hello World! - Your Foster History!
        <Filter />
        <Animals />
    </div>
  );
}

export default History