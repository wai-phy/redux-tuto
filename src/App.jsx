import { useSelector } from 'react-redux';
import Counter from './components/Counter'
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
function App() {
  const isLogin = useSelector((state)=> state.login.isLogin);
  return (
    <div className="App">
      <Navbar/>
      {
        !isLogin && <Welcome/>
      }
      {
        isLogin && <Counter/>
      }
    </div>
  );
}

export default App;
