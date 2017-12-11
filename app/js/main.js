let calcKeys = [
    {
        text: '7',
        value: 7,
    },
    {
        text: '8',
        value: 8,
    },
    {
        text: '9',
        value: 9,
    },
    {
        text: '÷',
        value: '/',
    },
    {
        text: '4',
        value: 4,
    },
    {
        text: '5',
        value: 5,
    },
    {
        text: '6',
        value: 6,
    },
    {
        text: '×',
        value: '*',
    },
    {
        text: '1',
        value: 1,
    },
    {
        text: '2',
        value: 2,
    },
    {
        text: '3',
        value: 3,
    },
    {
        text: '−',
        value: '-',
    },
    {
        text: '0',
        value: 0,
    },
    {
        text: '=',
        value: '=',
    },
    {
        text: '.',
        value: '.',
    },
    {
        text: '+',
        value: '+',
    },
    {
        text: 'AC',
        value: 'AC',
    },
];

let btnsCont = document.getElementById('buttonsContainer');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "34px Boogaloo";

let animation = document.getElementById('animation');

let expresion = '';

calcKeys.forEach(function(item) {

    let btn = createButtons(item.text);

    if(item.value === '=') {
        btn.classList.add('equals');
        btn.addEventListener('click', function() {

            try{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                expresion = '' + eval(expresion);                
            } catch (e) {
                alert('Incorrect calculation');
                expresion = '';
            }

            showResult();

        });

    } else if(item.value === 'AC'){
        btn.classList.add('ac');
        btn.addEventListener('click', function() {
            expresion = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            showResult();
        });

    } else {

        if(typeof item.value === 'number') {
            btn.classList.add('number');
        }
        
        btn.addEventListener('click', function() {
            expresion += item.value;
            showResult();
        });

    }

    btnsCont.appendChild(btn);

})

function createButtons(text) {
    let btn = document.createElement('button');
    btn.textContent = text;
    return btn;
}

function showResult() {
    ctx.fillText(expresion,20,40);
    animation.textContent = expresion;
}


