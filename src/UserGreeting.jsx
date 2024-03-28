
function UserGreeting(props)
{
    const welcome=<p  className="welcome-class"> welcome:{props.username} </p>
    const login= <h2 className="logout-class">please login in</h2>
  

    return(props.islogged ? welcome : login)
    
        

    

}

export default UserGreeting; 