
import propTypes from 'prop-types'

function List(props)
{
   
    //fruits.sort((a,b) =>a.calories - b.calories)
    //fruits.sort((a,b)=> b.name.localeCompare(a.name))
    //const lowcal=fruits.filter(fruit => fruit.calories <90)
   
    const category =props.cateragory;
    const fruits=props.item;
       
 
   const Listitem=fruits.map(fruit =>
      <li key={fruit.id}>
        {fruit.name}: &nbsp;
        <b>{fruit.calories}</b> </li>

   )
   
   
   return(<>
   <h1 className="list-category">{category}</h1>
   <ol className="list-items">{Listitem}</ol></>);
}
List.propTypesropTypes={
    cateragory:propTypes.string,
    item:propTypes.arrayOf(propTypes.shape({id:propTypes.number,
        name:propTypes.string,
        calories:propTypes.number}))
}


List.defaultProps={
    cateragory:"category",
    item:[],
    

}

export default  List;