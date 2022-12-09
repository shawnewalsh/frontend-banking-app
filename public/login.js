function Login(){
  const [show, setShow]         = React.useState(true);
  const [authenticated, setAuthenticated]   = React.useState('');
  const [username, setUsername]   = React.useState('');
  const [password, setPassword]   = React.useState('');
  const ctx = React.useContext(UserContext);

  console.log(`Context username is ${ctx.userName}`);

  function handleLogin(user) {
    setAuthenticated(1);
    setUsername(user);
    setShow(false);
    ctx.userName = user;
    console.log(`Context username after handleLogin is ${ctx.userName}`);
    ctx.loggedin = 1;
    console.log(`Context logged in after handleLogin is ${ctx.loggedin}`);
  }

  function handleLogout() {
    setAuthenticated(0);
    setUsername('');
    setShow(true);
    ctx.userName = '';
    ctx.loggedin = '';
  }

  console.log(`username is ${username}`);
  const auth = 1;
  return (
    <Card
      bgcolor="secondary"
      header="Please Login"

      body={!ctx.loggedin ? (  
        <>
        User Name<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter User Name (your email address)" value={username} onChange={e => setUsername(e.currentTarget.value)} /><br/>
        Password<br/>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" onClick={handleLogin} disabled={!(username && password)}>Sign In</button>
        </>
      ):(
        <>
        <h5>You are logged in</h5>
        <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
        </>
      )}
        
    

    />
   )
}
