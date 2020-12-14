let base = JSON.parse(sessionStorage.getItem("actionList"))||[];
let catalog = `
<h1>Actions.</h1>
<div class = "jumbotron">
`

    base.forEach (element => {
        catalog += `
        <div id = "action" class = "actions_main__element">
        <div class="actions_logo"><img src="`+element.images+`" alt=""></div>
        <div class="actions_description">
                    <p>`+element.date+`</p>
                    <p><em>`+element.actionName+`</em></p>
                    <p>`+element.actionDescription+`</p>
                    
                    <button type="submit" class="btn btn-danger">Детали</button>
                        
                    
                </div>
        </div>
        `     
    });

catalog += `</div>`;


