import React from 'react'
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Services from '../Service/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>

        </div>
    )
}

export default Home
