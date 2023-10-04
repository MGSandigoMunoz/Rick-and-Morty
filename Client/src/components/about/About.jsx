import imagen from "../../Img/me-about.jpg";
import styles from './About.module.css';

export default function About () {
    return (
        <div className={styles.background}> 
            <div className={styles.descripcionContainer} >  

                
                <p className={styles.descripcion}> <img src={imagen} alt="Gaby's photo" className={styles.imagen}/> Hi this is me! My name is Gaby, an adventure girl from Colombia (yes, that wonderfull view is in Cundinamarca Colombia) who decided to turn my life around and explore the world of programming</p>
        
                <p className={styles.descripcion}>I'm a geological engineering and environmental management specialist. With experience in reserch and work in research groups developing projects. A complete nerd!</p> 
                <p className={styles.descripcion}>Maybe you are wondering... what are you doing her?</p>
                <p className={styles.descripcion}>Well in my specialization I took an interesting subject about artifitial intelligence aplicate to geoscience... and there happens.. I meet JS and that was love at first sight... I enjoyed every single moment programming... I feel passionate about this job. And I hope to learn much about this. thanks for reading me and enjoyed my story, have a good day and good coding</p>  
           
            </div>
           
           
                
            
        </div>
    )
}