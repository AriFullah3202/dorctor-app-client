import React from 'react'
import Banner from './Banner/Banner';
import InfoCards from './InfoCard/InfoCards';
import Services from '../Service/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    )
}

export default Home
