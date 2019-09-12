import React from 'react'
// import { Col, CardPanel } from 'react-materialize';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'
import Login from '../../components/Login';

console.log ("This is the Homepage")
function Home() {
  return (
    <div>
        Hello World! - Welcome to Foster Me!
        <Login />
    </div>
  );
}

export default Home
