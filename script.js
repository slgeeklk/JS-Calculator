let currentDisplay;
let OP;
let screen = document.getElementById('screen');
let fValue;

function numPress(val) {
  currentDisplay = screen.value;

  if (currentDisplay == 0) {
    screen.value = val;
  } else {
    screen.value = currentDisplay + val;
  }
}

function no0Press() {
  currentDisplay = screen.value;

  if (currentDisplay != 0) {
    screen.value = currentDisplay + '0';
  }
}

//clear buttons

function AC() {
  screen.value = '0';
  OP = 0;
  fValue = 0;
  currentDisplay = 0;
}

function C() {
  screen.value = '0';
}

//operators

function operater(opp) {
  fValue = screen.value;
  screen.value = '0';
  OP = opp;
}

function result() {
  switch (OP) {
    case 1:
      screen.value = parseInt(fValue) + parseInt(screen.value);
      break;

    case 2:
      screen.value = parseInt(fValue) - parseInt(screen.value);
      break;

    case 3:
      screen.value = parseInt(fValue) * parseInt(screen.value);
      break;

    case 4:
      screen.value = parseInt(fValue) / parseInt(screen.value);
      break;
  }
}
