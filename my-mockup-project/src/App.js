import './reset.css';
import './style.css';
import Header from './header';
import Mv from './mv';
import Subcontents from './subcontents';
import Logo from './logo';
import Form from './form';
import Footer from './footer';

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
