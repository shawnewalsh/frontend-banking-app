function Login(){
  const [username, setUsername]     = React.useState('');
  const [password, setPassword]         = React.useState('');
  const [authenticated, setAuthenticated]       = React.useState('false');
  const [firstLoad, setFirstLoad] = React.useState('true');

  const ctx = React.useContext(UserContext);

  function handleLogin() {
    setAuthenticated(true);
    return;
  };

  function handleLogout() {
    setAuthenticated(false);
    return;
  };


  return (
    <Card
    bgcolor="primary"
    header="Please Login"
    status={authenticated}
    body={!authenticated || firstLoad ? (  
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={username} onChange={e => setUsername(e.currentTarget.value)} /><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin} disabled={!(username && password)}>Login</button>
            </>
          ):(
            <>
            <h5>You are currently Logged in</h5>
            <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
            </>
          )}
  />
)
}
