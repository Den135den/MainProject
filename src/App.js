import './App.css'
import Headers from './Component/Header/Headers';
import Page2 from './Component/Page2/Page2';
import Page3 from './Component/Page3/Page3';
import Page4 from './Component/Page4/Page4';
import Page5 from './Component/Page5/Page5';
import Page6 from './Component/Page6/Page6';
import Page7 from './Component/Page7/Page7';

function App() {
  return (
    <div>
 
      <Headers/>
   
      <Page2 title='Main rules'/>
      <Page5/>
       <Page3 title='the hall has a variety of equipment:'/>
       <Page4/>
       <Page6/>
       <Page7/>
      
     </div>
  );
}

export default App;
 