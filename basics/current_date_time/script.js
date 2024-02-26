function dateTime(){
    let myDate = new Date()
    let date = myDate.toDateString()
    let time = myDate.toTimeString()

    document.getElementById("date").innerHTML = date;
    document.getElementById("time").innerHTML = time;

    setTimeout(()=>{
        dateTime()
    }, 1000)
}
dateTime()


// setInterval(()=>{
//     dateTime()
// }, 1000)
