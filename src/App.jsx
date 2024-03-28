
import List from './List.jsx'

function App() {


  const fruits=[{id:2,name:"banana",calories:80},
  {id:1,name:"apple",calories: 90},
  {id:3,name:"orange",calories:90}]
                 
  const fruitsforeign=[{id:2,name:"starbeery",calories:80},
  {id:1,name:"weaterwelom",calories: 95},
  {id:3,name:"gavuva",calories:90}]



      return(
           <>
           {fruits.length >0 && <List item={fruits} cateragory="fruits-all" /> }
           {fruitsforeign.length>0 && <List item={fruitsforeign} cateragory="foreign-fruits"/> }
           </>
      

      )
}
    

export default App;
