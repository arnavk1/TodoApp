// document.getElementById("container").innerHTML = "sdfdsfdssd"
// document.createElement("p")

// let host = document.getElementById("container")
// .appendChild("p")
// contentPage.innerHTML = "SDFAF"
// let value = {"firstName":"John", "lastName":"Doe"}
// localStorage.setItem(3,JSON.stringify(value))
// let ans = JSON.parse(localStorage.getItem(3))
// console.log(ans.firstName)

// for (const key in localStorage) {
//     console.log(key)
// }
// localStorage.clear()
// console.log(typeof(Array.from(localStorage)))
// document.getElementById("add").addEventListener("click",()=>{
//     let key = localStorage.length+1
//     let value1 = false
//     let value2 = document.getElementById("value").value
//     let value = {"checked": value1, "value":value2}
//     // let value = document.getElementById("value").checked
//     // let newValue = """"""
//     localStorage.setItem(key,JSON.stringify(value))
//     document.getElementById("value").value = ""
// })
let value = JSON.parse(localStorage.getItem(1))
value.checked = true

console.log(localStorage.setItem(1,JSON.stringify(value)))