// confirmar o envio da denúncia
// document.getElementsById("submit").onclick = verify;

// function verify() {
//   verificado.style.display = "block";
//   document.getElementById("verificado").style.color = "green";
// }

  // Formatação do número telefônico
function formatTelefone() {
  const input = document.getElementById('telefone');
  //Remove tudo o que não é dígito
  const value = input.value.replace(/\D/g,"");          
  //Coloca parênteses em volta dos dois primeiros dígitos
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  //Coloca hífen entre o quarto e o quinto dígitos
  value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  input.value = formattedValue;
  }
  // const formattedValue = value.replace(/^(\d{2})(\d)/,"($1) $2"); 
  // const final = value.replace(/(\d)(\d{4})$/,"($1)  $2"); 
  // input.value = final;