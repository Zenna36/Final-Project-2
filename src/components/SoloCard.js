import React from 'react'
import data from '../data' //fetched data from database will go here
import Card from './Card'

const SoloCard =()=>{
    const cards = data.map(card => {
        return <Card 
            key = {card.id}
            // picture={card.picture}
            // author={card.author}
            // tourName={card.tourName}
            // years={card.years}
            // country={card.country}
            // gender={card.gender}
            // famousWorks={card.famousWorks}
            {...cards}
        />
    })
    
    console.log({cards})
    return(
        <main className='mainCard'>
            <div className='cardHeader'>
                <h2 className="soloCardHeader">{card.author}</h2>
            </div>
            <div className='cardContainer'>
                <div className='column'>
                    {cards}
                </div>
            </div>
        </main>
    )
}

export default SoloCard