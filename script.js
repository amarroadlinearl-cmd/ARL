document.getElementById("enquiryForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let pickup = document.getElementById("pickup").value;
  let delivery = document.getElementById("delivery").value;
  let material = document.getElementById("material").value;
  let weight = document.getElementById("weight").value;
  let message = document.getElementById("message").value;

  let text =
  "Freight Enquiry%0A" +
  "Name: " + name + "%0A" +
  "Mobile: " + mobile + "%0A" +
  "Pickup: " + pickup + "%0A" +
  "Delivery: " + delivery + "%0A" +
  "Material: " + material + "%0A" +
  "Weight: " + weight + "%0A" +
  "Message: " + message;

  // WhatsApp
  window.open("https://wa.me/917500134320?text=" + text, "_blank");

  // Email
  window.location.href =
  "mailto:amarroadlinearl@gmail.com?subject=Freight Enquiry&body=" + text;
});
