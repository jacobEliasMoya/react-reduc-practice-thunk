import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import {addFavorite, displayFavoriteButton} from './app/features/inputStringSlice'
import './style/styles.css';


function App() {
  const dispatch = useDispatch();
  const myState = useSelector(displayFavoriteButton);

  const handleClick=(e)=>{
    dispatch(addFavorite(e.target.innerHTML));
  }

  useEffect(() => {
    console.log(myState)
  }, [myState])

  const buttonArr = ["Button 1","Button 2","Button 3"];
  const renderNewButtons = (elm)=>{
    return <button onClick={handleClick}>{elm}</button>
  }

  return (
    <div className="App">
      {buttonArr.map(renderNewButtons)}
    </div>
  );
}

export default App;
