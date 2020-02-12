$(document).ready(() => {
    
    
    let htmlList = document.getElementById('todo-list'); //javascript
    
    let list;

    let url = 'http://localhost:9081/todos';
    
    axios.get(url).then((res) => {
        list = res.data;
        render(list);
    })

    // let keyStorage = 'todoList';
    // let list;
    // let dataString = localStorage.getItem(keyStorage);

    // if (dataString) {
    //     list = JSON.parse(dataString);
    // }
    // else {
    //     list = [];
    // }


    // console.log(list);


    let btnAdd = $('#add'); // jquery

    btnAdd.click(() => {  //click on button
        addItem();  // do add new item
    })


    let render = (list) => {

        let content = list.map(item => {
            return '<li>' + item.content + '</li>'
        });

        htmlList.innerHTML = content.join('');
    }


    let addItem = () => {
        let inputValue = document.getElementById('inputAction');

        let newItem = {  
           content: inputValue.value //get value of input
        };

        axios.post(url, newItem).then(() => {
            console.log("Saved");
        });

        inputValue.value = ''; //clear input value

        axios.get(url).then((res) => {
            list = res.data;
            render(list);
        })

        
    }

});




