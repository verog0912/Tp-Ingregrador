(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

function calcTotal() {
    const precio=1000
    console.log("calctotal")

    let cant=document.getElementById("cant").value
    console.log("cant"+cant)

    if (cant>=0) {
        let total=cant*precio
        console.log("total="+total)

        let desc=document.getElementById("desc").value
        total=total - (total*desc/100)
        console.log("total con descuento"+total)

        document.getElementById("total").className="fw-bold p-1"
        document.getElementById("total").innerHTML=total
    } else {
        document.getElementById("total").className="text-danger"
        document.getElementById("total").innerHTML="Valor inválido"
    }
}