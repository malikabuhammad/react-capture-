import homeImg1 from '../img/home1.png';
//Framer Motion 
import { easeOut, motion } from 'framer-motion';
//Styled 
import styled from 'styled-components' 
import {About,Hide,Description,Image}from '../styles'
import { titleAnim,fade ,photoAnim} from '../pages/animation';
import Wave from './Wave';

const AboutSection=()=>{
    // const titleAnim={
    //     hidden:{opacity:0},
    //     show:{opacity:1,transition:{duration:2}}, 
    // }
    // const containr={
    //     hidden:{x:100},
    //     show:{x:0,
    //         transition:
    //         {
    //             duration:0.75,
    //             ease:easeOut,
    //             staggerChildren:1,
    //             //defining when will the animation start 
    //             when:'beforeChildren'
    // }}
    // }
    return (
    <About>
        <Description>
            <motion.div containr className="title">
                <Hide>
                <motion.h2 variants={titleAnim}>We work to make</motion.h2>

                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>
                        Your <span>dreams</span> come
                         </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2 variants={titleAnim}>
                        true.
                         </motion.h2>
                </Hide>
            </motion.div>
            <motion.p variants={fade}>
                Contact us for any photography or videography ideas that you have.
                 we have professionals with ammazing skills.

            </motion.p >
            <motion.button variants={fade}>
                Contact Us 
            </motion.button>
        </Description>
        <Image>
             <motion.img variants={photoAnim} src={homeImg1} alt="camera man" />
        </Image>
        <Wave/>
    </About>

    );
};

//Styled Components 

export default AboutSection;
