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
document.getElementById("add").addEventListener("click", () => {
    let key = localStorage.length + 1
    let value1 = false
    let value2 = document.getElementById("value").value
    let value = { "checked": value1, "value": value2 }
    // let value = document.getElementById("value").checked
    // let newValue = """"""
    localStorage.setItem(key, JSON.stringify(value))
    document.getElementById("value").value = ""
    document.getElementById("lower").innerHTML = ""
    showItems()
})
// let value = JSON.parse(localStorage.getItem(3))
// value.checked = true

// console.log(localStorage.setItem(3,JSON.stringify(value)))

showItems()

function showItems() {
    document.getElementById("lower").innerHTML = ""
    for (i = 1; i <= localStorage.length; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'data')
        let data = JSON.parse(localStorage.getItem(i)).value
        div.innerHTML = `<input type='checkbox' id='check${i}' class="checking" onClick="cBoxFunc(this)"> <label for='check${i}'> ${data} </label>`
        // console.log(JSON.parse(localStorage.getItem(i)).checked === true)
        if (JSON.parse(localStorage.getItem(i)).checked === true) {
            // document.querySelector(`check${i}`).checked = true
            continue;
        }
        document.getElementById("lower").append(div)




        // let check = document.createElement('input')
        // check.setAttribute('type', 'checkbox')
        // check.setAttribute('id', 'checking')
        // check.setAttribute('class', 'check')

        // let label = document.createElement('p')
        // label.setAttribute('class', 'list')
        // label.setAttribute('for', 'checking')
        // label.innerHTML = JSON.parse(localStorage.getItem(i)).value
        // document.getElementById("data").append(check)
        // document.getElementById("data").append(label)
    }
}


function cBoxFunc(ele){
    // const cbox = document.querySelector(".checking")
    let cNum = ele.id.slice(5,);
    if (ele.checked) {
        let data = JSON.parse(localStorage.getItem(cNum))
        data.checked = true
        localStorage.setItem(cNum, JSON.stringify(data))
        showItems()
    } else {
        console.log("Checkbox is not checked..");
    }
}
// cbox.addEventListener("change", function () {
    
// })



// for(i=0;i<3;i++){
//     let div = document.createElement('div')
//     div.setAttribute("class","test")
//     div.innerHTML="<h1 class='lolve'>hello"+i+" how are you</h1>"
//     document.getElementById("lower").append(div)
// }