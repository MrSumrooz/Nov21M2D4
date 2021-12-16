

const inputTeam = document.getElementById("TeamInput");






let  InputTeamsNames = function() {
    
    let teamInputFromUser = inputTeam.value

    teamInputFromUser.split(",")

    return teamInputFromUser
    


}

let TeamArray = []


let generateMemberFromInput = function(){
    const TeamDisplayOutput = document.getElementById("teamsOutput");
    TeamDisplayOutput.innerHTML = InputTeamsNames()

    TeamArray.push(InputTeamsNames())

    
}


let TeamNumber = function(){
const TeamCountNode = document.getElementById("numberTeam");

    let TeamnumberNode = 0

    TeamnumberNode = TeamCountNode.value

return TeamnumberNode

}