let res = "";
let buttons = document.querySelectorAll('.bt');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            res = eval(res);
            document.getElementById('result').value = res;
        }
        else if (e.target.value == 'C') {
            res = "";
            document.getElementById('result').value = res;
        } else {
            res += e.target.value;
            document.getElementById('result').value = res;
            console.log(e.target)
        }

    })
})