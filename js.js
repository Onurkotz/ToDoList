let alert = document.querySelector("#alert")
let işlemBaşarı = (title, message, className="warning") =>
`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`
let liler = document.getElementsByTagName("li")
    
for(let i=0; i < liler.length;i++){  
let closeButton = document.createElement("span");  
closeButton.textContent = "x";
closeButton.classList.add("close");
closeButton.onclick = removeButton; 
liler[i].append(closeButton); 
liler[i].onclick = check; 
}

function check(){
this.classList.toggle("checked"); 
}

function removeButton(){
this.parentElement.remove(); 
} 



function newElement(event){
    let bilgi = document.querySelector('#task')
    bilgi.value 
    let liste = document.querySelector('#list')
    let listEk = document.createElement('li')
    
    if (bilgi.value){ 
        liste.append(listEk)
        listEk.innerHTML = bilgi.value
        localStorage.setItem("Eklenen", JSON.stringify(bilgi.value))
        let bilgiInfo = localStorage.getItem('Eklenen')
        bilgiInfo = JSON.parse(bilgiInfo)
        bilgi.value = ""
        alert.innerHTML = işlemBaşarı (
            "Brraavooooo!!!", 
            "Ekledin hacı."
            )
    } else if (bilgi.value.length == 0){
        alert.innerHTML = işlemBaşarı (
            "Orada dur bakalım!",
            "Boş yapma.",
            "dark"
        ) 
    }  
    
    
    let liler = document.getElementsByTagName("li")
    
    for(let i=0; i < liler.length;i++){  
    let closeButton = document.createElement("span");  
    closeButton.textContent = "x";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton; 
    liler[i].append(closeButton); 
    liler[i].onclick = check; 
    }

    function check(){
    this.classList.toggle("checked"); 
    }

    function removeButton(){
    this.parentElement.remove(); 
    }    
}










 
  