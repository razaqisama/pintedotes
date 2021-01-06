import './tailwind.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorite from './views/Favorite';
import HeroesDetail from './views/HeroesDetail';
import {Switch, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { setHeroes, setLore } from './store/actions'
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()

  const [heroStatus, setHeroStatus] = useState({
    loading: false
  })
  const [loreStatus, setLoreStatus] = useState({
    loading: false
  })

  useEffect(()=>{
    fetch("https://api.opendota.com/api/constants/heroes")
    .then(response => response.json())
    .then(data => {
      dispatch(setHeroes(data))
      setHeroStatus({
        loading: true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [dispatch])

  useEffect(()=>{
    fetch("https://api.opendota.com/api/constants/hero_lore")
    .then(response => response.json())
    .then(data => {
      dispatch(setLore(data))
      setLoreStatus({
        loading: true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }, [dispatch])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/heroes/:id">
          <HeroesDetail heroStatus={heroStatus} loreStatus={loreStatus} />
        </Route>
        <Route exact path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
