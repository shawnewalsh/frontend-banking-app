function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [validemail, setValidemail]       = React.useState('false');
  const [password, setPassword] = React.useState('');
  const [isButtonDisabled, setisButtonDisabled] =    React.useState('true');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error - Please enter a value for : ' + label);
        setTimeout(() => setStatus(''),3000);
        console.log(`the field is ${field}`);
        return false;
      }
      if (label = 'password' && field.length < 8 ){
        setStatus('Error - Password must be at least 8 characters' + label);
        return false;
      }
      console.log(`the field is ${field} and the datatype of the field is ${typeof(field)}`);
      setStatus('');
      setisButtonDisabled(false);
      return true;
  }

  // console.log(`Status is ' ${status}`)
  function validateEmail(email) {
    const emlRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.match(emlRgx)){
      setValidemail(true);
    }
    return email.match(emlRgx);
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email')) {
      return;
    }   
    if (!validate(password, 'password')) return;
    console.log(' Email validate is ' + validateEmail(email));
    if (! validateEmail(email)) {
      setStatus('Email address is invalid');
      return;
    } 
    setValidemail(true);
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!(name && email && password)}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

