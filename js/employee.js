document.getElementById("add").addEventListener("click", function () {
    const one = document.getElementById("inOne");
    const oneValue = one.value;
    const two = document.getElementById("inTwo");
    const twoValue = two.value;
    const three = document.getElementById("inThree");
    const threeValue = three.value;
    if (oneValue === "" || twoValue === "" || threeValue === "") {
        alert("please write");
        return;
    }
    const store = document.getElementById("store");
    const div = document.createElement("div");
    div.classList.add("found");
    // div.setAttribute("id", "found")
    div.innerHTML = `
        Name:<h1>${oneValue}</h1>
        Roll:<h2>${twoValue}</h2>
        CGPA:<h3>${threeValue}</h3>
        <button onclick="editing(event)">Edit</button>
        <button onclick="save(event)">Save</button>
        <hr>
    `
    store.appendChild(div)
    alert(`successfully added, Total Added ${store.children.length}`);
    store.style.display = "none"
    one.value = "";
    two.value = "";
    three.value = "";
})

function show() {
    const store = document.getElementById("store");
    store.style.display = "block"
}
function notShow() {
    const store = document.getElementById("store");
    store.style.display = "none"
}

function editing(event) {
    const one = document.getElementById("inOne");
    one.value = event.target.parentElement.children[0].innerText;
    const two = document.getElementById("inTwo");
    two.value = event.target.parentElement.children[1].innerText;
    const three = document.getElementById("inThree");
    three.value = event.target.parentElement.children[2].innerText;
}

function save(event) {
    const one = document.getElementById("inOne");
    event.target.parentElement.children[0].innerText = one.value;
    const two = document.getElementById("inTwo");
    event.target.parentElement.children[1].innerText = two.value;
    const three = document.getElementById("inThree");
    event.target.parentElement.children[2].innerText = three.value;
    one.value = "";
    two.value = "";
    three.value = "";
}

document.getElementById("search").addEventListener("click", function () {
    const storage = document.getElementById("storage")
    const searching = document.getElementById("searchText");
    let search = searching.value;
    const found = document.getElementsByClassName("found");
    for (let founds of found) {
        const match = founds.children[0].innerText;
        console.log(match)
        if (search.toLowerCase() === match.toLowerCase()) {
            const Name = founds.children[0].parentElement.children[0].innerText;
            const Age = founds.children[0].parentElement.children[1].innerText;
            const Salary = founds.children[0].parentElement.children[2].innerText;
            const div = document.createElement("div");
            div.innerHTML = `
                Name:<h1>${Name}</h1>
                Roll:<h2>${Age}</h2>
                CGPA:<h3>${Salary}</h3>
                <button onclick="deletes(event)">Delete</button>
            `
            storage.appendChild(div);
            searching.value = "";
            return;
        }
    }
    alert("not match");
    searching.value = "";
})

function deletes(event) {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
}