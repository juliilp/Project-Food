import './App.css';
import {Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Home from './componentes/Home/Home'
import LandingPage from './componentes/LandingPage/LandingPage';
import RecipeCreate from './componentes/recipeCreate/recipeCreate'
import Detail from './componentes/Detail/Detail';

function App() {
  const allRecipes = useSelector((state) => state.recipes)

  
  return (
    <div className="App">

      <Route exact path='/Home' component={Home} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/recipes/' component={RecipeCreate}   />
      <Route exact path='/Home/:id' component={Detail}   />
      
    </div>
  );
}

export default App;
