import './tailwind.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorite from './views/Favorite';
import HeroesDetail from './views/HeroesDetail';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchHeroes, fetchLore } from './store/actions'
import LandingPage from './views/LandingPage'

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchLore());
  }, [dispatch])

  useEffect(()=>{
    dispatch(fetchHeroes());
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/heroes">
          <Home />
        </Route>
        <Route exact path="/favorite">
          <Favorite />
        </Route>
        <Route path="/heroes/:id">
          <HeroesDetail/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
