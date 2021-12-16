


const inputFromUser = document.getElementById("TeamInput")

let inputTeamNames = function(){

    let parentUlNode = document.getElementById("Team-List")
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.innerHTML = inputFromUser.value 
    parentUlNode.appendChild(li)
   

}

const teamNumber = document.getElementById("TeamCount")
const teamRow = document.getElementById("teamsOutput")

let createTeams = function(){
    

    for(let i =0; i < teamNumber.value; i++){
        teamRow.innerHTML += `<div  class="col-2 team">
                                    <h6>Teams:${i + 1} </h6>
                                    <ul class="list-group "> 
                                    
                                    </ul>
                                    </div>`
    }

}




let assign = function(){
    let teams = document.querySelector(".team")
    const Person = document.getElementById("Team-List").children[0]
    

    let randomIndex = Math.floor(Math.random() * teams.length)

    teams[randomIndex].appendChild(Person)


}



