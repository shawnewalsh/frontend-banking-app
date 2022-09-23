function Home(){
  return (
    <Card
      txtcolor="black"
      header="Piggy Bank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="./bank.jpg" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
