import './style/styles.css';
import { clearSearchTerm, enterSearchTerm, insertSpace, backSpaceText, searchText, selectLetters, selectWords } from './app/features/inputStringSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  // use selector is awesome! 
  const letters = useSelector(selectLetters);
  const words = useSelector(selectWords);
  // use dispatch is pretty cool too!
  const dispatch = useDispatch();
  let keyNum=0;

  const handleLetterClick = (e) =>{
    dispatch(enterSearchTerm(e.target.innerHTML));
  }

  const handleClearClick = () =>{
    dispatch(clearSearchTerm());
  }

  const handleSpaceClick = () =>{
    dispatch(insertSpace());
  }

  const handleBackspace = () =>{
    dispatch(backSpaceText());
  }
 
  const handleSearch  = () =>{
    dispatch(searchText());
  }

  const letArray1 = ['q','w','e','r','t','y','u','i','o','p'];
  const letArray2 = ['a','s','d','f','g','h','j','k','l'];
  const letArray3 = ['z','x','c','v','b','n','m'];

  const retDynamicButton = (elm) => {
    return <button onClick={handleLetterClick} key={keyNum = keyNum+1}>{`${elm.toUpperCase()}`}</button>
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
          {letters}<span className='inputblinker'>|</span><br/>
          {words}
        </div>
        <div className='bottom'>
          <span>
            {letArray1.map(retDynamicButton)}
          </span>
          <span>
            {letArray2.map(retDynamicButton)}
          </span>
          <span>
            {letArray3.map(retDynamicButton)}
          </span>
        </div>
          <div className="controller">
            <span>            
              <button onClick={handleSpaceClick} className="space">SPACE</button>
              <button onClick={handleClearClick} className="clear">CLEAR</button>
              <button onClick={handleBackspace} className="backspace">BACKSPACE</button>
              <button onClick={handleSearch} className="enter">ENTER</button>
          </span>
          </div>
      </div>

    </div>
  );
}

export default App;
