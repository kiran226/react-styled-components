
import { FancyButton, StyledButton } from './components/button/Button.styles';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>

      <div>
        <br/>
      </div>

      <StyledButton variant='outline'>Styled Button</StyledButton>

      <div>
        <br/>
      </div>
      <FancyButton as="a">Fancy Button</FancyButton>
    </div>
  );
}

export default App;
