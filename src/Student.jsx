

import propTypes from 'prop-types'

function Student(props)
{
   return(
    <div className="Student">
    <p>Name:{props.Name}</p>
    <p>Age:{props.Age}</p>
    <p>Student:{props.isStudent ? "Yes" : "No" }</p>
    </div>
   )
}
Student.propTypes={
    Name:propTypes.string,
    Age:propTypes.number,
    isStudent:propTypes.bool  
}
Student.defaultprops ={
    Name:"Guest",
    Age:0,
    isStudent:false

}

export default Student;