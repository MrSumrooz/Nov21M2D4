

const inputTeam = document.getElementById("TeamInput");






let  InputTeamsNames = function() {
    
    let teamInputFromUser = inputTeam.value

    teamInputFromUser.split(",")

    return teamInputFromUser
    


}

let selectedTeamArray = []


let generateMemberFromInput = function(){
    const selectedTeam = document.getElementById("SelectedTeam");
    selectedTeam.value = InputTeamsNames()

    selectedTeamArray.push(InputTeamsNames())

    
}


let TeamNumber = function(){
const TeamCountNode = document.getElementById("numberTeam");

    let TeamnumberNode = 0

    TeamnumberNode = TeamCountNode.value

return TeamnumberNode

}

let TeamCreator = function(){

}


