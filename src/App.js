import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import './App.scss';
import Main from './components/Main/Main';

function App() {
    const theme = useSelector((state) => state.theme.color);
    return (
        <div className="App" id={theme}>
            <Header />
            <Main />
        </div>
    );
}

export default App;
