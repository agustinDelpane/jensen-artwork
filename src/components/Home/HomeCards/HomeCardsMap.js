import { useEffect, useState } from 'react';
import HomeCards from './HomeCards'
import { getCuadros } from './HomeCardsInfo'

const HomeCardsMap = () =>{
    const [cuadros, setCuadros] = useState([]);

    useEffect(() => {
        getCuadros().then(data => setCuadros(data));
    }, []);
   

    return(
        <div className='container'>
            {cuadros.map((cuadro) => (
                <div key={cuadro.nombre} className="cuadrosCards">
                    <HomeCards key={cuadro.nombre} img={cuadro.img} nombre={cuadro.nombre} description={cuadro.description} />
                </div>
            ))}
        </div>
    )


}

export default HomeCardsMap