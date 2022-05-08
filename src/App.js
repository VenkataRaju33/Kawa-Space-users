import React, { useState, useEffect } from 'react'
//https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20
import axios from 'axios'
import './App.css'
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results= 20').then((response) => {
      setData(response.data.results);
      setName(response.data.results[0])
    })
    console.log(data, 'data')
  }, [])
  const [name, setName] = useState({})
  //   const clickHandler=()=>{
  // setName({item})
  //   }
  //(name.picture.large===item.picture.large)?()
  console.log(name, 'name')
  return (
    <div>
<div className='top'>
  <h3>YourChallenge</h3>
  <div className='top-two'>
    <p>Product</p>
    <p>Download</p>
    <p>Pricing</p>
  </div>
</div>
      {name && Object.keys(name).length !== 0 &&
        <div className='first-card'>
          <img src={name?.picture.large} alt='' />
          <div className='first-card-description'>

            <h1>{name.name.title}. {name.name.first} {name.name.last}</h1>
            <p><span>{name.location.street.number}</span>,{name.location.city},{name.location.state},<b>{name.location.country}</b>,{name.location.postcode}</p>
            <p>{name.location.timezone.offset},{name.location.timezone.description}</p>
            <p>{name.gender}</p>
            <span>{name.id}</span>
          </div>
        </div>}
      <div className='view'>
        {data?.map((item) => (
          <div style={{backgroundColor:(name.email===item.email)?'#A259FF':'white'}} className='card' key={item.id} onClick={() => { setName(item) }} >
            <p style={{color:(name.email===item.email)?'white':'rgba(0, 0, 0, 0.6)'}}  className='card-gender'>{item.gender} - {item.nat}</p>
            <h2 style={{color:(name.email===item.email)?'white':'black'}} className='card-title'>{item.name.title}. {item.name.first} {item.name.last}</h2>
            <p style={{color:(name.email===item.email)?'white':'#E16259'}} className='card-email'>{item.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App