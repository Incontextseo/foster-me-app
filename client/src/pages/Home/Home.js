import React from 'react'
import './Home.css'
import Login from "../../components/Login/Login"
// /Users/jdclaas/Downloads/foster-me-app-master/client/src/components/Login
import API from "../../utils/API";


class Home extends React.Component {
  state = {
    fosters: []
  };

  loadFosters = () => {
    API.getFosters()
    .then(res => {
      console.log("res.data from getFosters method: ", res.data)
      this.setState({fosters: res.data})
    })
    .catch(err => console.log(err))
  };

  // Lifecycle method runs loadCurrentFosters
  componentDidMount() {
    this.loadFosters();
  };

  render() {
    return (
      <div>
        {/* <h1>Foster Me App</h1> */}
       
        {this.state.fosters.map(foster => (
          <div className="container" key={foster.fosterID}>
            {/* <Login 
              fosterID={foster.fosterID}
              fosterName={foster.fosterName}
            /> */}

          </div>
          

        ))}
      </div>

      

    );
  };
};

export default Home
