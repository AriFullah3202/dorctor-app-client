import React from 'react'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';



const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-primary'
        },
        {
            id: 3,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-primary'
        },

    ]

    return (
        <div className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                cardData.map(card => {
                    return <InfoCard key={card.id} card={card}></InfoCard>
                })
            }
        </div>


    );
};

export default InfoCards;
