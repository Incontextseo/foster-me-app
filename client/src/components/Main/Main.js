import React from "react";
import './Main.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



function Main(props) {


    return (

        <Container maxWidth="med" className="main__container">
        <Grid container direction = "column"
        justify = "center"
        alignItems = "center"
       >


        <Link href="/" className="main__link main__home">
          Home
        </Link>



        <Link href="/search" className="main__link main__search">
          Find Fosters
        </Link>


      <Link href="/fosters" className="main__link main__fosters">
        My Fosters
      </Link>

      <Link href="/history" className="main__link main__history">
        My Past Fosters
      </Link>

        </Grid> 
        </Container>


    )
}


export default Main;