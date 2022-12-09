function Deposit(){
  const ctx = React.useContext(UserContext);
  // console.log(`context username is ${ctx.userName}`);
  
  const [deposit, setDeposit]   = React.useState('');
  const [balance, setBalance ] = React.useState(ctx.balance);
  const [status, setStatus]     = React.useState('');
  
  console.log('ctx balance data type is ' + typeof(ctx.balance));

  function handleDeposit() {
    setStatus('');
    let pattern = /^\d+\.?\d*$/;


    
    if (parseInt(deposit) < 0 ){
      setStatus('Please enter positive numbers only');
      alert('Please enter positive numbers only');
      return;
    } 

    if (!pattern.test(deposit)) {
      setStatus('Please enter numbers only');
      alert('Please enter numbers only');
      return;
    }


    console.log('ctx balance data type is ' + typeof(ctx.balance));
    console.log('deposit data type is ' + typeof(deposit));
    ctx.balance += parseInt(deposit);
    setBalance(ctx.balance);
    document.getElementById('balance').innerHTML = balance;    
    console.log(`balance is now ${ctx.balance}`);
    setStatus('Success');
  
  }

  

  return (

    <Card
      bgcolor="primary"
      header="Deposit Funds"
      status={status}
      body={ctx.loggedin ? (  
        <>
                Current Balance<br/>
        <input type="text" id="balance" name="balance" value={balance} readOnly></input><br/>
        
        Amount<br/>
        <input type="input" className="form-control" id="deposit" placeholder="Enter your deposit amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
        <button type="submit" className="btn btn-dark" onClick={handleDeposit} disabled={!deposit}  >Confirm Deposit</button>
        <br/><br/>

        
        </>
      ):(
        <>
        <h5>Please login first to manage deposits</h5>
        </>

      )}
        
    

    />


    )
}
