"use strict";
function checkAgree(){
  if (document.form.agreedCheckbox.checked) {
    return true;
  } else {
    alert("利用規約に同意してください。");
	  return false;
  }
}