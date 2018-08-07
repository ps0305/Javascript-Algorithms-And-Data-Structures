//Generators
function* generateNumbers(x) {
  let y = yield x * 2;        //yields ,makes temporary exit from the function
  let z = y * 3;
  return z;
}

function* generateNumbers(x) {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
//adding promises to generators
function step1() {
  return new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
    console.log(3);
    setTimeout(function() {
      console.log(4);
      console.log(5);
      resolve();
    }, 1000);
  });
}
function step2() {
  console.log(6);
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(7);
      console.log(8);
      resolve();
    }, 1000);
  });
}
function step4() {
  console.log(9);
  console.log(10);
}
function* doWork() {
  yield step1();
  step2();
  yield step3();
  step4();
}

/*var it = doWork();
it.next().value.then(function() {
  it.next().value.then(function() {
    it.next();
  });
});*/
//to resolve above manual task,async-awaits used below

async function doWork() {
  await step1();
  step2();
  await step3();
  step4();
}
  
