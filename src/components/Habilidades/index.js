import "./styles.css";
import tecnologias from "../../assets/tec_logo.png"



export default function Habilidades() {

    return (
        <main className="habilidades" id="habilidades">
            
            
            <h1>Habilidades</h1>
            <img className= "tec" src={tecnologias}  alt="tecnologias" />
           
        </main>
    )

}