
function AllData(){

  const [show, setShow]         = React.useState(false);

  const ctx = React.useContext(UserContext);
  console.log(ctx.users);

  

  return (
    <Card 
    bgcolor="secondary"
    header="top secret... shhhh..."
    title = "User Data"
    
    body = { ctx.users ?  (
      <>
      <table className="table">
<thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Balance</th>
    </tr>
    { ctx.users.map((user, i) => (
      <tr key={i}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.balance}</td>
      </tr>
    ))}
</thead>
</table>
     </>

    ):(
    <>
     <h5>There are no users yet</h5>
    </>
    )
   
    }
    

    />
  )
    }
    

  

