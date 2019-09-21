import React from "react";
import './Main.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Main(props) {


    return (

        <Container maxWidth="med">
        <Grid container direction = "column"
        justify = "center"
        alignItems = "center">

<Link href="/" className="link">
        Home
      </Link>

<Link href="/search" className="link">
        Find Fosters
      </Link>

      <Link href="/fosters" className="link">
        My Fosters
      </Link>

      <Link href="/history" className="link">
        My Past Fosters
      </Link>

        </Grid> 
        </Container>


    )
}


export default Main;