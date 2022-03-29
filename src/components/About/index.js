import "./style.css";
import luana from '../../assets/luana.jpg';

export default function About() {

    return (
        <main id="about">
            <h1>Olá, eu sou a Luana!</h1>

            <div className='container_sobreMim'>
            <img className='luana' src={luana}  alt="luana" />
            <p className='sobreMim'>"Mulher, mãe e nova apaixonada pela tecnologia. Feliz de descobrir a cada dia as possibilidades infinitas que esse universo digital proporciona.  </p>
                
           
            </div>
            
            
           
            

        </main>
    )

}