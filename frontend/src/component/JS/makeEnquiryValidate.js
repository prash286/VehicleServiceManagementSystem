function validateSubject(subject) {
    if (subject === null || subject === "" || subject.trim().length === 0) {
      document.getElementById("errsub").innerHTML = "* This field is mandetory";
      return false;
    } else {
      document.getElementById("errsub").innerHTML = "";
      return true;
    }
  }
  
  function validateDescription(description) {
    if (
      description === null ||
      description === "" ||
      description.trim().length === 0
    ) {
      document.getElementById("errdesc").innerHTML = "* This field is mandetory";
      return false;
    } else {
      document.getElementById("errdesc").innerHTML = "";
      return true;
    }
  }
  
  function validateEnquiryForm() {
    let subject = document.getElementById("subject").value;
    let description = document.getElementById("description").value;
  
    let flag1 = validateSubject(subject);
    let flag2 = validateDescription(description);
    if (flag1 && flag2) {
      return true;
    } else {
      return false;
    }
  }
  export default validateEnquiryForm;
  