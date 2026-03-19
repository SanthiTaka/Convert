const amount = document.getElementById("amount");

//Manipulando o valor do input para receber apenas numeros
amount.addEventListener("input", () => {
  console.log(amount.value);
});
