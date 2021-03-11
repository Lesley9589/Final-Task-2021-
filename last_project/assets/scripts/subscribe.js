function subscribeAccount() {
  let form = document.getElementById("form-sub");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-new2/", {
    method: "POST",
    body: JSON.stringify({
      emailad: inputs[0].value,
    }),
    headers: {
      "Content-type": "application/json; chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Subscribed Successfully!");
      console.log(json);
      form.reset();
    });
}
