import './app.css'
import Header from '../header'
import {Route, Switch} from "react-router-dom"
import Home             from "../../pages/home"
import PokemonDetails   from "../../pages/pokemon-details"
import CapturedPokemons from "../../pages/captured-pokemons"
import {Container}      from "react-bootstrap"

function App() {
  return (
      <Container fluid className={"m-0 p-0"}>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/pokemons" exact component={CapturedPokemons}/>
              <Route path="/pokemons/:id"
                     render={({ match }) => {
                         const { id } = match.params;
                         return <PokemonDetails itemId={id} />
                     }}/>
          </Switch>
      </Container>
  );
}

export default App
