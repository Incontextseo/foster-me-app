import React from 'react'
import './Home.css'
<<<<<<< HEAD
import Login from '../../components/Login';
import API from "../../utils/API";
import Main from "../../components/Main";
=======
import Login from "../../components/Login/Login"
// /Users/jdclaas/Downloads/foster-me-app-master/client/src/components/Login
import API from "../../utils/API";
>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b


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
<<<<<<< HEAD
        <h1>Foster Me App</h1>
       
        {this.state.fosters.map(foster => (
          <div className="container" key={foster.fosterID}>
            <Login 
              fosterID={foster.fosterID}
              fosterName={foster.fosterName}
            />

          </div>

        ))}

<Main/>
      </div>

=======
        <h1>This is Homepage!</h1>
        <p>Once logged in, you see a menu of buttons to go to:</p>
          <ul>
            <li>Search and sign-up for fosters</li>
            <li>View your current Fosters and update their profiles.</li>
            <li>View the status of your past fosters.</li>
          </ul>

        <h2>Choose Your Name Below To Begin</h2>
        <Login>
</Login>
        {this.state.fosters.map(foster => (
          <div className="container" key={foster.fosterID}>
            {/* <Login 
              fosterID={foster.fosterID}
              fosterName={foster.fosterName}
            /> */}

          </div>
          

        ))}
      </div>

      

>>>>>>> 7c4ecf4b8ceafd03037bb0d9c81ad40da89c1f1b
    );
  };
};

export default Home
