function validateJobCard() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let date = document.getElementById("date").value;
    let model = document.getElementById("model").value;
    let vehNo = document.getElementById("vehno").value;
    let chasisno = document.getElementById("chasisno").value;
    let service = document.getElementById("service").value;
    let mechanic = document.getElementById("mech").value;
    let work = document.getElementById("work").value;
    var exp = /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
    if (name === null || name === "" || name.trim().length === 0) {
      document.getElementById("errname").innerHTML = "This Field is mandetory";
      return false;
    } else {
      document.getElementById("errname").innerHTML = "";
      if (!exp.test(email)) {
        document.getElementById("erremail").innerHTML =
          "Blank or Invalid Email Id : must contain '@' like abc@gmail.com";
        return false;
      } else {
        document.getElementById("erremail").innerHTML = "";
        if (
          mobile === null ||
          mobile === "" ||
          mobile.trim().length === 0 ||
          mobile.length < 10 ||
          mobile.length > 13
        ) {
          document.getElementById("errmob").innerHTML =
            "* This field is mandetory";
          return false;
        }
        document.getElementById("errmob").innerHTML = "";
        if (date === null || date === "" || date.trim().length === 0) {
          document.getElementById("errdate").innerHTML =
            "This field is mandetory";
          return false;
        } else {
          document.getElementById("errdate").innerHTML = "";
          if (model === null || model === "" || model.trim().length === 0) {
            document.getElementById("errmodel").innerHTML =
              "This field is mandetory";
            return false;
          } else {
            document.getElementById("errmodel").innerHTML = "";
            if (vehNo === null || vehNo === "" || vehNo.trim().length === 0) {
              document.getElementById("errvehno").innerHTML =
                "This field is mandetory";
              return false;
            } else {
              document.getElementById("errvehno").innerHTML = "";
              if (
                chasisno === null ||
                chasisno === "" ||
                chasisno.trim().length === 0
              ) {
                document.getElementById("errchasis").innerHTML =
                  "This field is mandetory";
                return false;
              } else {
                document.getElementById("errchasis").innerHTML = "";
                if (
                  service === null ||
                  service === "" ||
                  service.trim().length === 0
                ) {
                  document.getElementById("errser").innerHTML =
                    "This field is mandetory";
                  return false;
                } else {
                  document.getElementById("errser").innerHTML = "";
                  if (
                    mechanic === null ||
                    mechanic === "" ||
                    mechanic.trim().length === 0
                  ) {
                    document.getElementById("errmech").innerHTML =
                      "This field is mandetory";
                    return false;
                  } else {
                    document.getElementById("errmech").innerHTML = "";
                    if (
                      work === null ||
                      work === "" ||
                      work.trim().length === 0
                    ) {
                      document.getElementById("errwork").innerHTML =
                        "This field is mandetory";
                      return false;
                    } else {
                      document.getElementById("errwork").innerHTML = "";
                      return true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  export default validateJobCard;
  