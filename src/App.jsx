import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Pokemon from './pages/pokemon/Pokemon';
import Help from './pages/help/Help';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='pokemon' element={<Pokemon />}>
                    <Route path=':pokemonId' element={<Pokemon />} />
                </Route>
                <Route path='help' element={<Help />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
