import './reset.css';
import './style.css';
import Header from './Header';
import Mv from './Mv';
import Subcontents from './Subcontents';
import Logo from './Logo';
import Form from './Form';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
       <Mv />
       <Subcontents />
       <Logo />
       <Form />
      <Footer />  
    </div>
  );
}

export default App;
