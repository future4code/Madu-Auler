import React from "react";
import styled from 'styled-components'
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FinalStep from "./components/FinalStep";


const MainContainer = styled.div`

display:flex;
flex-direction:column;
align-items: center;
`

class App extends React.Component {
  state = {
    step: 1,
  }

  renderStage = () => {
    switch (this.state.step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FinalStep />;
      default:
        return <FinalStep />;
    }
  };

  nextStage = () => {
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <MainContainer>
        <div className="App">
          {this.renderStage()}
          <br />
          {this.state.step !== 4 && (
            <button onClick={this.nextStage}>Next Step</button>
          )}
        </div>
      </MainContainer>
    );
  }
}

export default App;

