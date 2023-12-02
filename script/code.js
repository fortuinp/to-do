

let itemlist = [];
function addItem() {
    let input = (document.getElementById('input').value).trim();
    if (input.length === 0 || input.length <= 3) {
        alert('characters must be more than 3');
    } 
    else{
    let capItem = input.charAt(0).toUpperCase() + input.slice(1);
    let addedTask = {
        id: itemlist.length + 1,
        name: capItem,
        createdDate: new Date().toDateString(),
        completed : false
    };

    itemlist.push(input);
    document.getElementById('output').innerText = addedTask.capItem
    input.value = '';
    localStorage.setItem('list',JSON.stringify(itemlist))
      addtolist();
}
}
document.querySelector('[data-add]').addEventListener('click', addItem)


function addtolist() {
    let items=document.getElementById('output')
    items.innerHTML=""
    
    for (let i=0;i<itemlist.length;i++){
   output.innerHTML += `<li> ${itemlist[i]} </li>`


    itemlist.forEach(addedTask => {     
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = addedTask.completed});


console.log(JSON.parse(localStorage.getItem('list')));
    //output.innerText = JSON.parse(localStorage.getItem('list'));

   }}


function sortitems() {
    itemlist.sort()
    addtolist()
}
document.querySelector('[data-sort]').addEventListener('click', sortitems)