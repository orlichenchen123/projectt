function Tornir(ID, Game_Name, Player1, Player2, who_won)  {
    this.ID = ID,
        this.Game_Name = Game_Name,
        this.Player1 = Player1,
        this.Player2 = Player2,
        this.Who_Won = who_won
}

function onPromiesManyResults() {
    var result =[];
    let promisGet = new Promise((resulve, reject) => {
        for (let i = 0; i < 100; i++) {
            result[i] = [new Tornir(3, "Taki", "orli", "limor", "orli")];

        };
        resulve(result);
    })
    console.log(promisGet)
    return promisGet;
}


function onPromiesError() {
    let promisGet = new Promise((resulve, reject) => {
        
        reject("erorr in site");
    })
    console.log(promisGet)
    return promisGet;

}

function onPromiesEmpyt() {
    let promisGet = new Promise((resulve, reject) => {
        var result = new Tornir();
        resulve(result);
    })
    console.log(promisGet)
    return promisGet;
}