let btn=document.getElementById("submit")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    var type= document.getElementById("category").value
    var firstName=document.getElementById("Firstname").value
    var lastName=document.getElementById("Lastname").value
    var email=document.getElementById("Email").value
    var phone=document.getElementById("MobileNo").value
//    var address=document.getElementById("Address").value
   var gender=document.getElementById("Gender").value
   var age=document.getElementById("Age").value
   var password=document.getElementById("Npassword").value
console.log(type)
   let user={
    type:type,
    firstName:firstName,
    lastName:lastName,
    email:email,
    phone:phone,
    // address:address,
    gender:gender,
    age:age,
    password:password
   };
   console.log(user)
   fetch("http://localhost:8080/save",{
    method:"POST",
    headers :{
        "Content-Type":"Application/json",
    },
    body:JSON.stringify(user)
   })

   .then((Response)=>{
    if(Response.ok){
        return Response.json();
    }
    else{   
        throw new Error("Registration not Successfull")
    }
   })
   .then(()=>{
    if(type=="Farmer"){
        window.location.href="http://127.0.0.1:5506/Agriculture-Machinery-Rental-Website/login.html"
    }
    else if(type=="Vendor"){
        window.location.href="http://127.0.0.1:5506/Agriculture-Machinery-Rental-Website/vendor-logun.html"
    }
   })
   .catch((error)=>{
    console.error("Error",error)
    alert("An Error occured while submitting");
   })

})