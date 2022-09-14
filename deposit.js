function Deposit(){
  const ctx = React.useContext(UserContext);
  // console.log(`context username is ${ctx.userName}`);
  
  const [deposit, setDeposit]   = React.useState('0');
  const [balance, setBalance ] = React.useState(100);
  //const [password, setPassword]   = React.useState('');
  
  function handleDeposit() {
    console.log('ctx balance data type is ' + typeof(ctx.balance));
    console.log('deposit data type is ' + typeof(deposit));
    ctx.balance += parseInt(deposit);
    setBalance(ctx.balance);
    document.getElementById('balance').innerHTML = balance;    
    console.log(`balance is now ${ctx.balance}`);
  
  }

  

  return (

    <Card
      bgcolor="primary"
      header="Deposit Funds"

      body={ctx.loggedin ? (  
        <>
        Amount<br/>
        <input type="input" className="form-control" id="deposit" placeholder="Enter your deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-dark" onClick={handleDeposit} >Confirm Deposit</button>
        <br/><br/>
        Current Balance<br/>
        <input type="text" id="balance" name="balance" value={balance} readOnly></input><br/>
        
        </>
      ):(
        <>
        <h5>Please login first to manage deposits</h5>
        </>

      )}
        
    

    />


    )
}
