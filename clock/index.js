setInterval(()=>{
    let date = new Date();
    let hours = date.getHours()
    let minutes =  Math.floor(date.getMinutes()/10)> 0 ? date.getMinutes() : '0'+date.getMinutes()
    let seconds = Math.floor(date.getSeconds()/10)> 0 ? date.getSeconds() : '0'+date.getSeconds()
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}` ;
}, 1000)

setInterval(()=>{
    let date = new Date();
    document.getElementById('date').innerHTML = `${date.getUTCDate()}/${date.getMonth()}/${date.getFullYear()}` ;
}, 1000)