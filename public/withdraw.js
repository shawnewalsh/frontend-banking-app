function Withdraw(){
  const ctx = React.useContext(UserContext);

  const [ withdrawal,setWithdrawal ] = React.useState('');
  const [ balance, setBalance ] = React.useState(ctx.balance);
  const [status, setStatus]     = React.useState('');
  console.log('ctx balance data type is ' + typeof(ctx.balance));
  function handleWithdrawal() {
    setStatus('');
    let pattern = /^\d+\.?\d*$/;


    
    if (parseInt(withdrawal) < 0 ){
      setStatus('Please enter positive numbers only');
      alert('Please enter positive numbers only');
      return;
    } 

    if (!pattern.test(withdrawal)) {
      setStatus('Please enter numbers only');
      alert('Please enter numbers only');
      return;
    }


    if (parseInt(withdrawal) > ctx.balance ){
      setStatus('transaction failed: You do not have enough funds to make that withdrawal');
      alert('transaction failed');
      return;

    }
    ctx.balance -= parseInt(withdrawal);
    setBalance(ctx.balance);
    document.getElementById('balance').innerHTML = balance;    
    console.log(`balance is now ${ctx.balance}`);
    setStatus('Success');
  }

  return (
    <Card
    bgcolor="secondary"
    header="Withdraw Funds"
    status={status}
    body={ctx.loggedin ? (  
      <>
            Current Balance<br/>
      <input type="text" id="balance" name="balance" value={balance} readOnly></input><br/>
      Amount<br/>
      <input type="input" className="form-control" id="withdraw" placeholder="Enter your withdrawal amount" value={withdrawal} 
        onChange={e => setWithdrawal(e.currentTarget.value)} /><br/>
      <button type="submit" className="btn btn-light" onClick={handleWithdrawal} disabled={!withdrawal} >Confirm withdrawal</button>
      <br/><br/>

      
      </>
    ):(
      <>
      <h5>Please login first to manage withdrawals</h5>
      </>

    )}
      
  

  />

  )
}
