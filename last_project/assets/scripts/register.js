function createAccount() {
  let form = document.getElementById("creating_account");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-new/", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
      passw: inputs[1].value,
      email: inputs[2].value,
    }),
    headers: {
      "Content-type": "application/json; chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been created");
      console.log(json);
      form.reset();
    });
}
