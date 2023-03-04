
//import icons 
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
const ServicesSection= () => { 

    return(
        <div className="services">
            <div className="description">
            <h2> High <span>Quality</span> Services </h2>
            
            <div className="cards">
            <div className="icon">
            <img src={clock}></img>
            <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
              
            <div className="cards">
            <div className="icon">
            <img src={teamwork}></img>
            <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
              
            <div className="cards">
            <div className="icon">
            <img src={diaphragm}></img>
            <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
              
            <div className="cards">
            <div className="icon">
            <img src={money}></img>
            <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </div>        
<div className="img">
<img src={home2} alt="" srcset="" />

</div>
         </div>

    )
}
export default ServicesSection