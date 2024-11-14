

// 1. Show an alert box on click on a link.


// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.

function purchase(){
    alert('thanks for purchasing a phone from us!!')
}


// 3. Display 10 student records in table and each row should contain a delete 
// button. If you click on a button to delete a record, entire row should be 
// deleted. 

function delette(){
    var gett = document.getElementById('del');

    gett.style.display='none';
}



// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout


// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser.
// var count = 0


    let count = 0; 

    function task(action) {
        if (action === 'increase') {
            count++;
        } else if (action === 'decrease') {
            count--; 
        }
        document.getElementById('counter').innerText = count; // Show updated counter value
    }
