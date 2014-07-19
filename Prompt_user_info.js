function Name (str) {
  this.nam = str;
};

Name.prototype.validate = function () {
  if((!this.nam) || (this.nam == " ") || (this.nam == "  ")) {
    alert("Name cannot be empty");
    return false;
  }
  return true;
};

Name.prototype.displayResult = function(LastName) {
  alert("Hello " + this.nam + " " + LastName.nam);
  document.write("Hello " + this.nam + " " + LastName.nam);
};

function createNames (str) {
  return new Name(str);    
}

window.onload = function(e) {
  var result = "";
  fname = prompt("Enter first Name");
  firstname = createNames(fname);
  result = firstname.validate();
  if (!result) {
    alert("Please Fill the details again");
    return;
  }
  lname = prompt("Enter Last Name");
  lastname = createNames(lname);
  result = lastname.validate();
  if (!result) {
    alert("Please Fill the details again");
    return;
  }  
  firstname.displayResult(lastname);
}  