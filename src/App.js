import logo from './logo.svg';
import './App.css';
import NewsCard from './components/newsCard/newsCard';
import Publish from './components/publish/publish';
import GetFirebase from './components/testing/getFirebase';

function App() {
  return (
    <>
      <Publish />
      <NewsCard/> 
       
      {/* <GetFirebase/>
      <NewsCard/>  */}
       
    </>
  );
}

export default App;
