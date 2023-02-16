import './App.css';
import './components/TextForm.css';
import './components/InputForm.css';
import TextForm from './components/TextForm';
import InputForm from './components/InputForm';
import Todu from './components/Todu';
import './components/Todu.css';
// import './components/Alert';

 
function App() {
  return (
    <div className="App">
      <>

     <TextForm/>

     <InputForm/>
     <Todu />

     </>
    </div>
    
  );
}

export default App;
