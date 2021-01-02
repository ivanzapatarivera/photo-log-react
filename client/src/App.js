import React, { useState, useEffect } from "react";
import PastriesForm from './components/Pastries/Form';
import pastriesService from './services/pastriesService';

function App() {
  const [pastry, setPastry] = useState(null);

  useEffect(() => {
    if(!pastry) {
      getPastry();
    }
  });

  const getPastry = async () => {
    let response = await pastriesService.getAll();
    console.log(response);
    setPastry(response);
  }

  const renderPastry = pastry => {
    return (
      <li key={pastry._id}>
        <h5>{pastry.title}</h5>
        <p>
          {pastry.description}<br />
          {pastry.price}<br />
          {pastry.imageURL}<br />
        </p>
      </li>
    )
  }

  return(
    <ul>
      <PastriesForm />
      {
        (pastry && pastry.length > 0) ? 
        (pastry.map(
          pastry => renderPastry(pastry)
        )) :
        (
          <p>No Pastries Have Been Logged</p>
        )
      }
    </ul>
  )
}

export default App;
