
let itemlist=[]
function additem() {
    let input = (document.querySelector('[data-input]').value).trim()
    if (input.length === 0 || input.length <= 3) {
        alert('Item must not be empty and must have more than three characters');
    }
    
    let Citem = input.charAt(0).toUpperCase() + input.slice(1);
    let additems={
        id: itemlist.length + 1,
        name: Citem,
        createdDate: new Date().toDateString(),
        completed : false
    }
    // console.log(additems.name);
    itemlist.push(additems)
    localStorage.setItem('list',JSON.stringify(itemlist))
    document.getElementById('output').innerText = additems.name;
    display()
}
document.querySelector('[data-add]').addEventListener('click',additem)

function display() {
    console.log(JSON.parse(localStorage.getItem('list')));
    let output= document.getElementById('output')
    output.innerText = JSON.parse(localStorage.getItem('list'));
}


