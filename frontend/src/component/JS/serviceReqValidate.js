function validateMobileNo(mobileNo) {
  if (
    mobileNo === null ||
    mobileNo === "" ||
    mobileNo.trim().length === 0 ||
    mobileNo.length < 10 ||
    mobileNo.length > 13
  ) {
    document.getElementById("errmob").innerHTML = "* This field is mandetory";
    return false;
  }
  document.getElementById("errmob").innerHTML = "";
  return true;
}

function validateVehModel(model) {
  if (model === null || model === "" || model.trim().length === 0) {
    document.getElementById("errmod").innerHTML = "* This field is mandetory";
    return false;
  }
  document.getElementById("errmod").innerHTML = "";
  return true;
}

function validateVehNo(num) {
  if (num === null || num === "" || num.trim().length === 0) {
    document.getElementById("errno").innerHTML = "* This field is mandetory";
    return false;
  }
  document.getElementById("errno").innerHTML = "";
  return true;
}

function validateServiceReqForm() {
  let mobile = document.getElementById("mobile").value;
  let vehModel = document.getElementById("vehmodel").value;
  let vehNo = document.getElementById("vehNo").value;

  let flag1 = validateMobileNo(mobile);
  let flag2 = validateVehModel(vehModel);
  let flag3 = validateVehNo(vehNo);

  if (flag1 && flag2 && flag3) {
    return true;
  }
  return false;
}
export default validateServiceReqForm;
