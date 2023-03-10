import './App.css';
import './normalize.css'

import Navbar from './components/Navbar/Navbar';
import Title from './components/Navbar/Title';
import Billboard from './components/Billboard/Billboard';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <>
      <div className="App">
        <Billboard />
        <Navbar />
        <Title />
        <Footer />

      </div>
    </>
  );
}

export default App;
