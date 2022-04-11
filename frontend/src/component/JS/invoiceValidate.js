function validateInvoice() {
  let date = document.getElementById("date").value;
  let labour = document.getElementById("labour").value;
  let part = document.getElementById("part").value;
  let qty = document.getElementById("qty").value;
  let amt = document.getElementById("amt").value;

  if (date === null || date === "" || date.trim().length === 0) {
    document.getElementById("errdate").innerHTML = "Select date";
    return false;
  } else {
    document.getElementById("errdate").innerHTML = "";
    if (labour === null || labour === "" || labour.trim().length === 0) {
      document.getElementById("errlab").innerHTML = "Enter labour charge";
      return false;
    } else {
      document.getElementById("errlab").innerHTML = "";
      if (part === null || part === "") {
        document.getElementById("errpart").innerHTML = "Select one part";
        return false;
      } else {
        document.getElementById("errpart").innerHTML = "";
        if (qty === null || qty === "" || qty.trim().length === 0) {
          document.getElementById("errqty").innerHTML = "Enter quantity";
          return false;
        } else {
          document.getElementById("errqty").innerHTML = "";
          if (amt === null || amt === "" || amt.trim().length === 0) {
            document.getElementById("erramt").innerHTML = "Calculate amount";
          } else {
            document.getElementById("erramt").innerHTML = "";
            return true;
          }
        }
      }
    }
  }
}
export default validateInvoice;
