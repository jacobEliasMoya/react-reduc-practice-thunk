import './style/styles.css';
import { clearSearchTerm, enterSearchTerm, insertSpace, backSpaceText } from './app/features/inputStringSlice';
import { store } from './app/store';

function App() {

  const handleLetterClick = (e) =>{
    store.dispatch(enterSearchTerm(e.target.innerHTML));
    console.log(store.getState())
  }

  const handleClearClick = (e) =>{
    store.dispatch(clearSearchTerm());
  }

  const handleSpaceClick = () =>{
    store.dispatch(insertSpace());
  }

  const handleBackspace = () =>{
    store.dispatch(backSpaceText());
    console.log(store.getState())

  }

 

  let keyNum=0;

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
          {store.getState()}
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
          </span>
          </div>
      </div>

    </div>
  );
}

store.subscribe(App)
export default App;
