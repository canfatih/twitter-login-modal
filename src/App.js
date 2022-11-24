import { useState } from 'react';
import './App.css';
import GirisModal from './components/GirisModal';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [show,setShow]=useState(true);

  let ModalState=()=>{
if(show===true){
  setShow(false)
}
else{
  setShow(true)
}

  }

  return (
    <div className="App">
     <GirisModal show={show} ModalState={ModalState}></GirisModal>
    </div>
  );
}

export default App;
