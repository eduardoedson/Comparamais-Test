import StepOne from './Components/Steps/One'
import StepTwo from './Components/Steps/Two'
import StepThree from './Components/Steps/Three'
import StepFour from './Components/Steps/Four'
import StepFive from './Components/Steps/Five'
import StepSix from './Components/Steps/Six'
import './Styles/App.css'

const App = () => {
  return (
    <div className="App steps">
      <span className="step-header">Step <span id="actual-step">1</span> of 6</span>
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
      <StepSix />
    </div>
  );
}
export default App;
