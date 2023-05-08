import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';
import { AuthProvider } from './providers/Auth.provider';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
