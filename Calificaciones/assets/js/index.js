//alert("Si estoy ejecutandome!")

document.getElementById("saveDataBtn").addEventListener("click",function(e){
    e.preventDefault()
    var studentID = document.getElementById("studentId").value
    var studentName = document.getElementById("studentName").value
    var Note1 = parseFloat(document.getElementById("Note1").value)
    var Note2 = parseFloat(document.getElementById("Note2").value)
    var Note3 = parseFloat(document.getElementById("Note3").value)
    var prom = (nota1+ nota2 + nota3) / 3

    console.log(prom)
    console.log(studentID, studentName, Note1, Note2, Note3)
    
    if(studentID == "" || studentName == "" || Note1 == "" || Note2 == "" || Note3 == "" || Note1<5 && Note1>=0){
        alert("Debe llenar los campos!")
    }
    else{
        localStorage.setItem(studentID,[studentName,"3","4","5"])
        alert("Todo quedó guardado!")
    }
})
