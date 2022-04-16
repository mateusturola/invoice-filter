import InvoicesProvider from './Context/InvoicesProvider';
import Home from './Page/Home';

function App() {
  return (
    <InvoicesProvider>
      <Home />
    </InvoicesProvider>
  );
}

export default App;
