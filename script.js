let botao = document.getElementById("botao")

botao.addEventListener('click', ()=>{
    
   let nome =  document.getElementById("nome").value
   let valorTotal = document.getElementById("valorTotal").value
   let valorPorc = document.getElementById("valorPorc").value

   let soma = (valorTotal * valorPorc) / 100

//    alert(soma)

   if(valorTotal == '' && valorPorc == '' && nome == ''){
    document.getElementById('erro1').textContent = 'Preencha todos os campos!'
    document.getElementById("erro1").style.color = "red"
    document.getElementById('erro2').textContent = 'Preencha todos os campos!'
    document.getElementById("erro2").style.color = "red"
    document.getElementById('erro3').textContent = 'Preencha todos os campos!'
    document.getElementById("erro3").style.color = "red"
   }
   else if(nome == ''){
    document.getElementById("erro1").textContent = 'Preencha esse campo!'
    document.getElementById("erro1").style.color = "red"
    console.log("erro 1")
   }
   else if(valorTotal == '' || valorTotal <= 0){
    document.getElementById("erro2").textContent = 'Preencha esse campo!'
    document.getElementById("erro2").style.color = "red"
    console.log("erro 2")
   }
   else if(valorPorc == '' || valorPorc <= 0){
    document.getElementById("erro3").textContent = 'Preencha esse campo!'
    document.getElementById("erro3").style.color = "red"
    console.log("erro 3")
   }
   else{
    document.getElementById("resultado").textContent = `Olá ${nome}, ${valorPorc}% de ${valorTotal} é igual á: R$${soma}.`
   }

})