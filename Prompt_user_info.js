function Name (str) {
  this.userName = str;
};

Name.prototype.validate = function () {
  if((!this.userName) || (this.userName == " ") || (this.userName == "  ")) {
    alert("Name cannot be empty");
    return false;
  }
  return true;
};

Name.prototype.displayResult = function(LastName) {
  alert("Hello " + this.userName + " " + LastName.userName);
  document.write("Hello " + this.userName + " " + LastName.userName);
};

function createNames (str) {
  return new Name(str);    
}

window.onload = function(e) {
  fname = prompt("Enter first Name");
  firstname = createNames(fname);
  if (!firstname.validate()) {
    alert("Please Fill the details again");
    return;
  }
  lname = prompt("Enter Last Name");
  lastname = createNames(lname);
  if (!lastname.validate()) {
    alert("Please Fill the details again");
    return;
  }  
  firstname.displayResult(lastname);
}  