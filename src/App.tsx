

import './App.css'

function App() {
  
  fetch("https://script.google.com/macros/s/AKfycbxDimh08Xsdvla7ntKSCXkKEKyvxqO-o7hzfkQUowjf7izSCyJeoC-RZEnqs1WEEr4H/exec")
  .then(response => response.json())
  .then(json => {
    console.log(json)
  })

  return (
    <>
      <p>hello world</p>
    </>
  )
}

export default App
