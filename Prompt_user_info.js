function Name () {
  this.firstName = this.promptForName("Enter first name");
  this.lastName = this.promptForName("Enter last name");
};

Name.prototype.promptForName = function(str) {
  var currentName = prompt(str);
  if (!this.validate(currentName)) {
    document.reload();
  }
  else {
    return currentName;
  }
};

Name.prototype.validate = function (currentName) {
  if((!currentName) || (currentName == " ") || (currentName == "  ")) {
    alert("Name cannot be empty");
    return false;
  }
  return true;
};

Name.prototype.displayResult = function(LastName) {
  alert("Hello " + this.firstName + " " + this.lastName);
  document.write("Hello " + this.firstName + " " + this.lastName);
};

window.onload = function() {
  var name = new Name();
  name.displayResult();
}