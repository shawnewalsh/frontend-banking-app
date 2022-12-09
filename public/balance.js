import './date.js';


function Balance(){

  const ctx = React.useContext(UserContext);




  return (
 <Card
      bgcolor="primary"
      header="Current Balance"
      
      body={ctx.loggedin ? (  
        <>
        <br/>
        Current Balance<br/>
        <input type="text" id="balance" name="balance" value={ctx.balance} readOnly></input><br/>
        
        </>
      ):(
        <>
        <h5>Please login to see your Balance</h5>
        </>

      )}
        
    

    />

  )
}
