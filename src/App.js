import React, { useState, useEffect } from 'react'
import './App.css';
import Modal from "./Modal"

function App() {
  const [visible, setVisible] = useState(false);
  function toggle() {
    if(visible === true) setVisible(false);
    else setVisible(true);
  }
  return (
    <div className="app">
      <button onClick={toggle}>button</button>

      <Modal visible={visible}>
        Hello<br></br>
        <button onClick={toggle}>button</button>
      </Modal>
    </div>
  )
}

export default App;
