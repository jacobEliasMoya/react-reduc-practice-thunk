import './style/styles.css'

function App() {

  const letArray1 = ['q','w','e','r','t','y','u','i','o','p'];
  const letArray2 = ['a','s','d','f','g','h','j','k','l'];
  const letArray3 = ['z','x','c','v','b','n','m'];

  const retDynamicButton = (elm) => {
    return <button>{`${elm.toUpperCase()}`}</button>
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='top'>
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
              <button className="enter">ENTER</button>
              <button className="space">SPACE</button>
              <button className="clear">CLEAR</button>
              <button className="backspace">BACKSPACE</button>
          </span>
          </div>
      </div>

    </div>
  );
}

export default App;
