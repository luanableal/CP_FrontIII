import "./styles.css";
import logo from '../../assets/logo.png';

export default function Header(){

    
    function scrollToComponent(id){
        document.getElementById(id).scrollIntoView();
    }

    return (
        <header>
            <img className="logo_img" src={logo}  alt="logo" />

            <ul className="menu">
                
                <li className="item-menu" onClick={()=> scrollToComponent("about")}> Sobre </li>
                <li className="item-menu" onClick={()=> scrollToComponent("habilidades")}> Habilidades </li>
                <li className="item-menu" onClick={()=> scrollToComponent("projects")}> Projetos </li>           
                <li className="item-menu" onClick={()=> scrollToComponent("social")}> Contato </li>
                                
            </ul>

        </header>
    )
}