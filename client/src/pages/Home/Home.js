import React from 'react'
import './Home.css'
import Login from '../../components/Login';
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
        <h1>This is Homepage!</h1>
        <p>Once logged in, you see a menu of buttons to go to:</p>
          <ul>
            <li>Search and sign-up for fosters</li>
            <li>View your current Fosters and update their profiles.</li>
            <li>View the status of your past fosters.</li>
          </ul>
        <h2>Choose Your Name Below To Begin</h2>
        {this.state.fosters.map(foster => (
          <div className="container" key={foster.fosterID}>
            <Login 
              fosterID={foster.fosterID}
              fosterName={foster.fosterName}
            />

          </div>

        ))}
      </div>

    );
  };
};

// console.log ("This is the Homepage")
// function Home() {
//   return (
//     <div>
//         Hello World! - Welcome to Foster Me!
//         <Login />
//     </div>
//   );
// }

export default Home
