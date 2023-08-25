function login(){
    const name = document.getElementById('name').value;
    const pass = document.getElementById("pass").value;
    
    const CORRECT_NAME = "admin";
    const CORRECT_PASS = "Admin@10"
    
    if (name === CORRECT_NAME & pass === CORRECT_PASS){
      alert("Login Successfull")
    }
    else{
      if (name !== CORRECT_NAME){
        console.log("Name Not Match");
      }else{
        console.log("Pass Not Match");
      }
      alert("Incorect Creds");
    }
    
  }