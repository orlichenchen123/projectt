$(function(){
$("#btnGetAllObserMy").click(function() {
    alert( "click()" );
    document.getElementById('results').value = ''
    var button1 = document.getElementById("btnGetAllObserMy")
    let obserButten = Rx.Observable.fromEvent(button1, 'click')
            .subscribe(
                {
                    next:function (value){
                    console.log(`Clicked `);
                        getTornir();        },
                    error: (err) => console.log(`Clicked Error`),
                    complete: () => console.log(`Clicked Completed `)
                }
            )



});
})
