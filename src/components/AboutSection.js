import homeImg1 from '../img/home1.png';

//Styled 
import styled from 'styled-components' 
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
const About = styled.div`
min-height: 90 vh;
display: flex;
align-items: center ;
justify-content: space-between;
padding: 5 rem 10 rem ;
color: white;
` ;

const Description = styled.div`
flex:1;
padding-right: 5rem ;
h2
{
    font-weight: lighter;
}
`;

const Image =styled.div `
flex: 1;
overflow: hidden;
img{ 
    width: 100%;
    height: 80vh;
    object-fit: cover;
}
`;
const Hide =styled.div`
overflow: hidden;
`
export default AboutSection;
