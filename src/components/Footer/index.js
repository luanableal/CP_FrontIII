import "./styles.css";
import {BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="content-sociais" id="social">
        <div className="contato">
            <h1>Fale Comigo:</h1>
        </div>

       <div className="redes">
        <a className="icons" target="_blank" href="https://github.com/luanableal">
          <BsGithub size={40} color="070707" />
        </a>
        <a className="icons" target="_blank" href="https://www.linkedin.com">
          <BsLinkedin size={40} color="0a58caad" />
        </a>

        <a className="icons" target="_blank" href="mailto:luanabls3@gmail.com">
          <BsFillEnvelopeFill size={40} color="" />
        </a>

        </div>


    </section>
  );
}