// The Deadline Date
// 1000 ml sec = 0ne sec

let countDownDate = new Date("Jun 20, 2024 23:59:59").getTime()
// console.log(countDownDate); 
let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime()

    // find the diff between Now & Countdpwn Date
    let dateDiff = countDownDate - dateNow

    // Get time units

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    // console.log(days)

    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) /1000 / 60 /60)

    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))

    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".seconds").innerHTML = seconds

    if (dateDiff < 0) {
        clearInterval(counter)
        document.querySelector("Enjoy Your Learning").innerHTML = seconds
    }
}, 1000) 