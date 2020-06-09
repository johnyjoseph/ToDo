var username=document.getElementById("username");
var password=document.getElementById("password");

function val(c){
   
    var u=username.value;
    var p=password.value;
        if(u=="admin"&&p=="12345")
      {
          c();
        
      }
      else if(u==""&&p=="")
      {
          alert("Please enter username and password");
     
      }
      else 
      {
       alert("username or password is incorrect");
      }

}
function c(){
    
    location.replace("./main.html");
}

