export function generateActions(){
    let baseact = JSON.parse(sessionStorage.getItem("actionList"))||[];
let actions = `
<h1>Actions.</h1>
<div class = "jumbotron">
`

    baseact.forEach (element => {
        actions += `
        <div id = "action" class = "actions_main__element">
        <div class="actions_logo"><img style = "max-width: 400px;" src="`+element.images+`" alt=""></div>
        <div class="actions_description">
                    <p>`+element.date+`</p>
                    <p><em>`+element.actionName+`</em></p>
                    <p>`+element.actionDescription+`</p>
                    
                    <button type="submit" class="btn btn-danger" onclick="return location.href = '#actions/`+ element.id +`'">Детали</button>
                        
                    
                </div>
        </div>
        `     
    });

    actions += `</div>`;
    return actions
}



