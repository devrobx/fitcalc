const submit2 = document.getElementById('submit2');
const close2 = document.querySelector('.close2');
const maleRadio2 = document.getElementById('r1');
const femaleRadio2 = document.getElementById('r2');

const spanWt = document.getElementById('wt-1')
const spanBmr = document.getElementById('bmr')
const spanCn = document.getElementById('cn')

const gain = document.getElementById('gain')
const lose = document.getElementById('lose')

const gainh = document.getElementById('0lb')
const gain1 = document.getElementById('1lb')
const gain2 = document.getElementById('2lb')

const loseh = document.getElementById('lose-5')
const lose1 = document.getElementById('lose1')
const lose2 = document.getElementById('lose2')

let bmrGlobal;
let cnGlobal;

const gContent = document.querySelector('.gain-content')
const lContent = document.querySelector('.lose-content')


let gender2 = 'male'


maleRadio2.addEventListener('click', () => {
    gender2 = 'male';
});

femaleRadio2.addEventListener('click', () => {
    gender2 = 'female';
});


gain.addEventListener('click', () => {
    gContent.style.display = 'block'
    let half = cnGlobal + 250
    let pound = cnGlobal + 500
    let twop = cnGlobal + 1000

    gainh.innerHTML = Math.round(half)
    gain1.innerHTML = Math.round(pound)
    gain2.innerHTML = Math.round(twop)
})

lose.addEventListener('click', () => {
    lContent.style.display = 'block'
    let half = cnGlobal - 250
    let pound = cnGlobal - 500
    let twop = cnGlobal - 1000

    loseh.innerHTML = Math.round(half)
    lose1.innerHTML = Math.round(pound)
    lose2.innerHTML = Math.round(twop)
})




submit2.addEventListener('click', () => {
    let feet2 = document.getElementById('feet2').value;
    let inches2 = document.getElementById('inches2').value;
    let wt2 = document.getElementById('weight2').value;
    let age = document.getElementById('age').value;
    let activity = document.getElementById('activity').value

    console.log(activity)
    if (checkForBlanks(feet2) === true) {
        return
    }

    if (checkForBlanks(inches2) === true) {
        return
    }

    if (checkForBlanks(wt2) === true) {
        return
    }

    if (checkForBlanks(age) === true) {
        return
    }

    document.querySelector('.bg-modal2').style.display = 'flex';

    let ht2 = feetToInches(feet2)
    ht2 += parseInt(inches2, 10)

    let bmr
    if (gender2 === 'male') {
        bmr = bmrMen(wt2, ht2, age)
    } else {
        bmr = bmrWomen(wt2, ht2, age)
    }

    let cal = bmr * activity

    bmrGlobal = bmr
    cnGlobal = cal

    spanBmr.innerHTML = Math.round(bmr)
    spanWt.innerHTML = wt2
    spanCn.innerHTML = Math.round(cal)



})

close2.addEventListener('click', () => {
    console.log('bye');
    document.querySelector('.bg-modal2').style.display = 'none';
});

function checkForBlanks(text) {
    if (text == '') {
        alert('Please fill out all the fields in the form');
        return true;
    }
}

function feetToInches(f) {
    return f * 12;
}

function bmrMen(w, h, a) {

    let bmr = 66 + (6.3 * w) + (12.9 * h) - (6.8 * a)
    console.log(bmr)
    return bmr
}


function bmrWomen(w, h, a) {

    let bmr = 655 + (4.3 * w) + (4.7 * h) - (4.7 * a)
    return bmr
}