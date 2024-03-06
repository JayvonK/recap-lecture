import React, { useEffect, useState } from 'react'
import { getDigimon } from '../../Dataservices/DataServices'
import { Idigimon } from '../../Interfaces/Interfaces'
import DigimonInfoComponent from './DigimonInfoComponent';

const HomePageComponent = () => {
  const digiDefault: Idigimon = {
    name: "",
    img: "",
    level: ""
  }
  const [digimon, setDigimon] = useState<Idigimon>(digiDefault);

  useEffect(() => {
    const getData = async () => {
      const digiData = await getDigimon();
      console.log(digiData);
      setDigimon(digiData);
    }

    getData();
  }, [])

  return (
    <div>
      <h1>This is Our Home Page</h1>
      {/* && */}
      {/* Digimon Name: {digimon && digimon.name} | Digimon Rank: {digimon && digimon.level} */}

      {/* {digimon ? digimon.name + " " + digimon.level : "Still Loading"}; */}

      <DigimonInfoComponent digimonName={digimon.name} digimonLevel={digimon.level} digimonImg={digimon.img}/>
    </div>
  )
}

export default HomePageComponent
