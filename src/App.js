import './App.css';
import { AuthProvider } from './Context'; // Use context implementation and import
import Routes from './Routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
