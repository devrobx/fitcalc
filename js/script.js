const submit = document.getElementById('submit');
const close = document.querySelector('.close');
const maleRadio = document.getElementById('radio1');
const femaleRadio = document.getElementById('radio2');
const section = document.getElementById('femaleForm');
const check = section.style.display;

const num = document.getElementById('number');
const bfnum = document.getElementById('bf');
let gender = 'male';

maleRadio.addEventListener('click', () => {
  section.style.display = 'none';
  gender = 'male';
  console.log(gender);
});

femaleRadio.addEventListener('click', () => {
  section.style.display = 'block';
  gender = 'female';
  console.log(gender);
});

//Form Submission
submit.addEventListener('click', () => {
  let feet = document.getElementById('feet').value;
  let inches = document.getElementById('inches').value;
  let wt = document.getElementById('weight').value;
  let waist = document.getElementById('waist').value;
  let wrist = document.getElementById('wrist').value;
  let hip = document.getElementById('hip').value;
  let fora = document.getElementById('forearm').value;

  if (gender === 'male') {
    if (checkForBlanks(feet) === true) {
      return;
    }
    if (checkForBlanks(inches) === true) {
      return;
    }
    if (checkForBlanks(wt) === true) {
      return;
    }
    if (checkForBlanks(waist) === true) {
      return;
    }
  } else {
    if (checkForBlanks(feet) === true) {
      return;
    }
    if (checkForBlanks(inches) === true) {
      return;
    }
    if (checkForBlanks(wt) === true) {
      return;
    }
    if (checkForBlanks(waist) === true) {
      return;
    }
    if (checkForBlanks(wrist) === true) {
      return;
    }
    if (checkForBlanks(hip) === true) {
      return;
    }
    if (checkForBlanks(fora) === true) {
      return;
    }
  }

  // Display Modal
  document.querySelector('.bg-modal').style.display = 'flex';

  // Height in inches
  let ht = feetToInches(feet);
  ht += parseInt(inches, 10);

  // Calculate BMI
  let bmi = bmiCalc(wt, ht);

  let bf = bodyFat(wt, waist, wrist, hip, fora);

  let text;
  let text1;
  if (bmi < 18.5) {
    text = 'You are Underweight :/';
  } else if (bmi > 24.9) {
    text = 'You are overweight :(';
  } else {
    text = 'You have a normal weight :)';
  }

  num.innerHTML = bmi.toFixed(1);
  document.querySelector('.b1').innerHTML = text;
  bfnum.innerHTML = bf.toFixed(2);
  if (gender == 'male') {
    text1 = bodyFatMen(bf);
  } else {
    text1 = bodyFatWomen(bf);
  }

  document.querySelector('.b2').innerHTML = text1;
});

//Form reveal

// Close Modal
close.addEventListener('click', () => {
  console.log('bye');
  document.querySelector('.bg-modal').style.display = 'none';
});

function bmiCalc(wt, ht) {
  console.log(ht);
  console.log(Math.pow(ht, 2));
  let num = wt * 703;

  let res = num / Math.pow(ht, 2);

  return res;
}

function feetToInches(f) {
  return f * 12;
}

function bodyFat(wt, waist, wrist, hip, fora) {
  //console.log(`in fuction : ${gender}`);
  if (gender == 'male') {
    let factor = wt * 1.082 + 94.42;
    let factor2 = waist * 4.15;
    console.log(`factor: ${factor}`);
    let leanweight = factor - factor2;
    let bodyFatWt = wt - leanweight;

    let percentage = (bodyFatWt * 100) / wt;

    return percentage;
  } else {
    let factor = wt * 0.732 + 8.987;
    let factor1 = wrist / 3.14;
    let factor2 = waist * 0.157;
    let factor3 = hip * 0.249;
    let factor4 = fora * 0.434;

    let leanweight = factor + factor1 - factor2 - factor3 + factor4;
    let bodyFatWt = wt - leanweight;

    let percentage = (bodyFatWt * 100) / wt;
    return percentage;
  }
}

function checkForBlanks(text) {
  if (text == '') {
    alert('Please fill out all the fields in the form');
    return true;
  }
}

function bodyFatMen(p) {
  let text;

  if (p > 6 && p <= 13) {
    return (text = 'You have an athletic build');
  } else if (p > 13.01 && p <= 17) {
    return (text = 'You have a fit build');
  } else if (p > 17.01 && p <= 25) {
    return (text = 'You have an acceptable Body Fat percentage');
  } else if (p < 6) {
    return (text = 'Your Body Fat percentage is too low');
  } else {
    return (text = 'Your Body Fat percentage is high');
  }
}

function bodyFatWomen(p) {
  if (p >= 14 && p <= 20) {
    return (text = 'You have an athletic build');
  } else if (p > 21.01 && p <= 24) {
    return (text = 'You have a fit build');
  } else if (p > 24.01 && p <= 31) {
    return (text = 'You have an acceptable Body Fat percentage');
  } else if (p < 14) {
    return (text = 'Your Body Fat percentage is low');
  } else {
    return (text = 'Your Body Fat percentage is high');
  }
}
