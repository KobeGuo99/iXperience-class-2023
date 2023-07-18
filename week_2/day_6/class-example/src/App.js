import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './components/Demo';

function App() {
  return (
    <div className='text-center'>
      <h1>People List</h1>
      <Demo name="Kobe" title="Software Engineer" count={0} />
      <Demo name="Michelle" title="Software Engineer" count={0} />
      <Demo name="Mitchell" title="Software Engineer" count={0} />
    </div>
    
  );
}

export default App;
