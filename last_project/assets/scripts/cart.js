var modal = document.getElementById("popup");

function getCar() {
  fetch(`http://127.0.0.1:5000/show-car/`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((car) => showcar(car));
    });
}

function showcar(car) {
  const caracc = `<tr data-id=${car.id}>
        <td>${car.car_name}</td>
        <td>${car.price}</td>
        <td><button class="delete_btn" onclick="delete_items(${car.id})">X</button></td>
        </tr>`;
  let list = document.getElementById("car_table");
  console.log("vroom");
  list.innerHTML += caracc;
}
getCar();

function delete_items(id) {
  if (confirm("Item will be removed from Cart")) {
    fetch(`http://127.0.0.1:5000/delete-account/${id}/`, { method: "DELETE" });
    console.log(id);
  } else {
    alert("cancel");
    console.log("not saved to database");
  }
}
