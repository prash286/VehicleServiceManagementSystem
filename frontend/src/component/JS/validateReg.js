//🚀validate name
function validateName(name) {
    if (name == null || name == "" || name.trim().length == 0) {
      document.getElementById("errname").innerHTML = "This Field is mandetory";
      return false;
    } else {
      document.getElementById("errname").innerHTML = "";
      return true;
    }
  }
  // //📦validate email 📧
  function validateEmail(email) {
    var exp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})/;
  
    if (!exp.test(email)) {
      document.getElementById("erremail").innerHTML =
        "Blank or Invalid Email Id : must contain '@' like abc@gmail.com";
      return false;
    } else {
      document.getElementById("erremail").innerHTML = "";
      return true;
    }
  }
  
  // //🚀 validate mobileNo📱
  function validateMobileNo(mobileno) {
    if (
      mobileno == "" ||
      mobileno == null ||
      mobileno.trim().length == 0 ||
      mobileno.length < 10 ||
      mobileno.length > 13
    ) {
      document.getElementById("errmob").innerHTML =
        "this field is mandetory & Mobile no must be of 10 digit";
      return false;
    } else {
      document.getElementById("errmob").innerHTML = "";
      return true;
    }
  }
  
  //📦 validate password
  function validatePassword(pass) {
    var exp = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*#).*$/;
    if (!exp.test(pass)) {
      document.getElementById("errpass").innerHTML =
        "Blank or Invalid password: min length must be 8 character & must contain at least 1 Capital letter, 1 small letter, 1 numeric value & 1 '#' symbol";
      return false;
    } else {
      document.getElementById("errpass").innerHTML = "";
      return true;
    }
  }
  
  function validateRegistration() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobileno = document.getElementById("mob").value;
    var pass = document.getElementById("pass").value;
  
    var flag1 = validateName(name);
    var flag2 = validateEmail(email);
    var flag3 = validateMobileNo(mobileno);
    var flag4 = validatePassword(pass);
    if (flag1 && flag2 && flag3 && flag4) {
      return true;
    } else return false;
  }
  export default validateRegistration;
  