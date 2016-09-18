/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction() {
  if (document.getElementById('same').checked){
    var x = document.getElementById('shippingName');
    var y = document.getElementById('billingName');
    y.value = x.value;
    x = document.getElementById('shippingZip');
    y = document.getElementById('billingZip');
    y.value = x.value
  }
  else{
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
  }
}