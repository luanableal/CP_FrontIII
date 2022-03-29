import "./style.css";
import {Card, Button} from "react-bootstrap";


const data = [
    {
      id: "1",
      name: "Utilização do Bootstrap ",
      link: "https://github.com/kadiado/checkpoint-03-fron-end.git",
      link2: "https://kadiado.github.io/checkpoint-03-fron-end/",
      image:
        "https://diariodoturismo.com.br/wp-content/uploads/2015/03/1392f-1316807172_255726807_1-Ecotur-Belem-Agencia-de-Viagens-e-Turismo-Icoaraci.jpg",
    },
    {
      id: "2",
      name: "Consumo API - To Do List",
      link: "https://github.com/luanableal/todo-List.git",
      link2: "https://luanableal.github.io/todo-List/",
      image:
        "https://www.theladders.com/wp-content/uploads/to-do-list-190702.jpg",
    },
    {
      id: "3",
      name: "Criando Form com HTML",
      link: "https://github.com/luanableal/checkpoint2.git",
      link2: "https://luanableal.github.io/checkpoint2/",
      image:
        "https://files.cercomp.ufg.br/weby/up/27/o/icon_form.png?1486478348",
    },
    
  ];



export default function Projects() {

    return (
        <article className="content-projects" id="projects">
            <h1 className="title-projects">Projetos</h1>
            <ul className="list-projects">
                {
                    data.map(({image, name, link, link2, id})=>(
                      
                      <div className="cartao">
                        <Card className="item-list-projects" style={{ width: '18rem' }}>
                          <Card.Img className="item-img" variant="top" src={image} key={id} width={300} alt="Imagem do projeto" />
                            <Card.Body>
                              <Card.Title className="item-title">{name}</Card.Title>

                                <div className="botoes">
                                <a href={link}>
                                <Button variant="secondary">Repositório</Button>
                                </a>
                                <a href={link2}>
                                <Button variant="secondary">Git Page</Button>
                                </a>
                                </div>

                            </Card.Body>
                        </Card>
                      </div>))
                }
            </ul>

        </article>
    )

}