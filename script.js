
function add() {
    let listbox = document.querySelector(".list-box")
    let input = document.getElementById("input-text")

    if (input.value === '') {
        alert("add todo")
    }
    else {

        let listbox = document.querySelector(".list-box")
        let listlabel = document.createElement("label")
        listlabel.setAttribute("class", "listlabel")
        listbox.appendChild(listlabel)

        let text = document.createElement("p")
        listlabel.appendChild(text)
        text.setAttribute("class", "listpara")
        text.textContent = input.value

        let delIcon = document.createElement("i")
        delIcon.setAttribute("class", "fa-solid fa-trash-can")
        listlabel.appendChild(delIcon)

        delIcon.addEventListener('click', () => {
            listbox.removeChild(listlabel)
        })

        input.value = ""

    }

    // let span1 = document.querySelector("span")
    // let listlabeltext = document.querySelector(".listlabel")

    // let icon = document.querySelectorAll(".fa-solid")
    // for (i = 0; i < icon.length; i++) {
    //     icon[i].onclick = function () {
    //         this.parentNode.remove()

    //     }
    // }

}

