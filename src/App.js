import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import './App.scss';
import Main from './components/Main/Main';
import WhatsNew from './components/WhatsNew/WhatsNew';
import { Flip, ToastContainer } from 'react-toastify';

function App() {
    const theme = useSelector((state) => state.theme.color);
    const update = useSelector((state) => state.update.status);

    return (
        <div className="App" id={theme}>
            <Header />
            {update ? <WhatsNew /> : <Main />}
            <ToastContainer
                position="bottom-right"
                autoClose={250}
                limit={6}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme === 'dark' ? 'dark' : 'light'}
                transition={Flip}
            />
            <div>
                <div className="anchor"></div>
            </div>
        </div>
    );
}

export default App;
