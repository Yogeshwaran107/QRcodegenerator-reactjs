

function Buttonbtn()
{ 

    let count=0;



      const handleClick2= (name) => {
        

             (count<3 ? count++
            console.log(`${name} you click me this time ${count} `) :
            console.log(`${name} stop clicking me `))

      }

      return (<button onClick={ ()=>handleClick2("king")}>Click Me</button>)
}

export default Buttonbtn;