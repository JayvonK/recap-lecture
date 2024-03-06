import React from 'react'
import { IdigiProps } from '../../Interfaces/Interfaces'

const DigimonInfoComponent = (props : IdigiProps) => {
  return (
    <div>
      <h1>Digimon Rank: {props.digimonLevel} Digimon Name: {props.digimonName}</h1>
      <img src={props.digimonImg} alt={props.digimonName}/>
    </div>
  )
}

export default DigimonInfoComponent
