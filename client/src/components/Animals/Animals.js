import React from 'react'
import './Animals.css'

function Animals(props) {

    const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, onClick, buttonText} = props;

    return (

        <article id={animalID}>
            <img src={animalThumbnailUrl} alt={animalName} />
            <h4>{animalName}</h4>
            <p>Age: {animalGeneralAge || "Age unknown"}</p>
            <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
            <p>Breed: {animalBreed || "Breed unknown"}</p>
            <p>{animalDescriptionPlain}</p>
            <button 
                className="btn waves-effect waves-light" 
                onClick={onClick}
                data-id={animalID}
            >{buttonText}</button>

        </article>
    )}

// class Animals extends Component {
//     componentWillUnmount() {
//         window.clearTimeout(this.timeout)
//     }
//     render() {
//         return (
//             <div>
//                 This is the Animals component!
//                 <div className="card">
//                     <img src="..." className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Card title</h5>
//                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="/" class="btn btn-primary">Go somewhere</a>
//                     </div>
//                 </div>
//                 function Animals(props) {

//                 const { animalID, animalName, animalGeneralAge, animalThumbnailUrl, animalGeneralSizePotential, animalBreed, animalDescriptionPlain, onClick, buttonText} = props;

//                 return (

//                     <article id={animalID}>
//                         <img src={animalThumbnailUrl} alt={animalName} />
//                         <h4>{animalName}</h4>
//                         <p>Age: {animalGeneralAge || "Age unknown"}</p>
//                         <p>Size: {animalGeneralSizePotential || "Size not provided"}</p>
//                         <p>Breed: {animalBreed || "Breed unknown"}</p>
//                         <p>{animalDescriptionPlain}</p>
//                         <button 
//                             className="btn waves-effect waves-light" 
//                             onClick={onClick}
//                             data-id={animalID}
//                         >{buttonText}</button>

//                     </article>
//                 )}
//             </div>
//         )
//     }
// }

export default Animals