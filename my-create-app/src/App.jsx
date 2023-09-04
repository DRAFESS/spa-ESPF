
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"
import Cabecalho from "./components/cabecalho"

export default function App(){
  return(
    <>
      <h1>APP - Componente Pricipal</h1>
      <div>
        <Cabecalho/>

        <Conteudo/>

        <Rodape/>
        <header>
          <h1>vite+react coded by - 551752</h1>
          <nav>
            <ul>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ul>
          </nav>
        </header>

        <section>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus dolorem a, eius, dolore officia natus nihil consequuntur tempora alias corrupti repudiandae ipsam doloribus numquam? Repellendus alias quidem obcaecati voluptatem?</p>
            <p>Cum eligendi officia eos aliquid soluta cumque voluptatibus velit, eaque necessitatibus, unde adipisci sunt autem deserunt facere cupiditate iusto, ut itaque illo sed mollitia debitis a iste eius? Obcaecati, dolor.</p>
            <p>Fugit ut cumque unde similique esse eveniet repellendus nesciunt, neque dicta sint odit nemo optio quos reprehenderit. Accusamus, neque? Vero fugit corrupti eaque architecto assumenda praesentium recusandae consectetur, sunt error?</p>
            <img src="./assets/react.svg" alt="Logo react" />
          </div>
        </section>

        <footer>
          <div>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Youtube</a></li>
            </ul>
           <p>&copy; todos os meus diretos reservados</p>
          </div>
        </footer>

      </div>
    </>
  )
}