import homeImg1 from '../img/home1.png';

//Styled 
import styled from 'styled-components' 
import {About,Hide,Description,Image}from '../styles'
const AboutSection=()=>{
    return (
    <About>
        <Description>
            <div className="title">
                <Hide>
                    <h2>we work to make </h2>
                </Hide>
                <Hide>
                    <h2>Your <span>dreams</span> come </h2>
                </Hide>
                <Hide>
                    <h2>true. </h2>
                </Hide>
            </div>
            <p>
                Contact us for any photography or videography ideas that you have.
                 we have professionals with ammazing skills.

            </p>
            <button>
                Contact Us 
            </button>
        </Description>
        <Image>
             <img src={homeImg1} alt="camera man" />
        </Image>
    </About>

    );
};

//Styled Components 

export default AboutSection;
