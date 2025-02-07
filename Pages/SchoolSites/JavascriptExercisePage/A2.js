window.onload = function () {
  let tabContent = document.querySelector("#tabcontain");
  tabContent.addEventListener("click", handleTabClick);
  document.querySelector(".tab").click();

  let ex1 = document.querySelector("#exercise1");
  ex1.addEventListener("click", exercise1);

  let ex2 = document.querySelector("#exercise2");
  ex2.addEventListener("click", exercise2);

  let ex3 = document.querySelector("#exercise3");
  ex3.addEventListener("click", exercise3);

  let ex4 = document.querySelector("#exercise4");
  ex4.addEventListener("click", exercise4);

  let ex5 = document.querySelector("#exercise5");
  ex5.addEventListener("click", exercise5);

  let ex6 = document.querySelector("#exercise6");
  ex6.addEventListener("click", exercise6);

  let ex7 = document.querySelector("#exercise7");
  ex7.addEventListener("click", exercise7);

  let ex8 = document.querySelector("#exercise8");
  ex8.addEventListener("click", exercise8);

  let ex9 = document.querySelector("#exercise9");
  ex9.addEventListener("click", exercise9);

  let ex10 = document.querySelector("#exercise10");
  ex10.addEventListener("click", exercise10);
};

function handleTabClick(event) {
  let tab = event.target;
  deselectAllTabs();
  tab.classList.add("active");

  let id = tab.id;
  id = "Exercise_" + id;
  console.log(id);
  hideAllSections();
  let entity = document.querySelector("#" + id);
  console.log(entity);
  let classList = entity.classList;
  classList.remove("hidden");
}

function deselectAllTabs() {
  let tabs = document.querySelectorAll(".tab");
  for (let i = 0; i < tabs.length; i++) {
    let classList = tabs[i].classList;
    classList.remove("active");
  }
}

function hideAllSections() {
  let sections = document.querySelectorAll(".sheet");
  for (let i = 0; i < sections.length; i++) {
    let classList = sections[i].classList;
    classList.add("hidden");
  }
}

function exercise1() {
  let min = document.querySelector("#inputmin1");
  let max = document.querySelector("#inputmax1");

  let output = document.querySelector("#output1");
  output.classList.remove("hidden");
  output.classList.add("output");

  let minnum = +min.value;
  let maxnum = +max.value;

  if (minnum > maxnum) {
    alert("Error: Minimum input is higher than Maximum input");
    return;
  }

  let html = "";
  html += "<ul>";

  for (i = minnum; i <= maxnum; i++) {
    html += `<li>${[i]}</li>`;
  }

  html += "</ul>";

  output.innerHTML = html;
}

function exercise2() {
  let input = document.querySelector("#input2").value;
  let stringArray = input.split(",");
  let numArray = [];

  let output = document.querySelector("#output2");
  output.classList.remove("hidden");
  output.classList.add("output");

  for (i = 0; i < stringArray.length; i++) {
    numArray.push(+stringArray[i]);
  }

  let counter = 0;
  let total = 0;
  let average = 0;
  let min = numArray[0];
  let max = numArray[0];

  for (i = 0; i < numArray.length; i++) {
    let num = numArray[i];
    total += num;
    counter++;

    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  average = total / counter;

  let html = "<ul>";
  html += `<li>Number of Values: ${counter}</li>`;
  html += `<li>Total: ${total}</li>`;
  html += `<li>Average: ${average}</li>`;
  html += `<li>Smallest: ${min}</li>`;
  html += `<li>Largest: ${max}</li>`;

  output.innerHTML = html;

  console.log(min, max);
}

function exercise3() {
  let output = document.querySelector("#output3");
  output.classList.remove("hidden");
  output.classList.add("output");

  let div = document.querySelector("#Exercise_C");
  let input = div.querySelector("#input3");
  let key = div.querySelector("#inputkey3");
  let keyValue = key.value;
  let inputValue = input.value;
  inputValue = inputValue.split(",");
  let count = 0;
  for (let z = 0; z < inputValue.length; z++) {
    if (Number(keyValue) === Number(inputValue[z])) {
      count++;
    }
  }

  output.innerHTML = count;
}

function exercise4() {
  // NumStars
  let htmlDiv = document.querySelector("#output4");
  htmlDiv.classList.remove("hidden");
  htmlDiv.classList.add("output");

  let div = document.querySelector("#Exercise_D");
  let inputValue = Number(div.querySelector("#input4").value);
  let outString = "";
  if (inputValue > 0) {
    for (let z = 0; z < inputValue; z++) {
      outString += "*";
    }
  } else {
    alert("Input lower than 1");
  }

  htmlDiv.innerHTML = outString;
}

function exercise5() {
  let htmlOut = document.querySelector("#output5");
  htmlOut.classList.remove("hidden");
  htmlOut.classList.add("output");

  let div = document.querySelector("#Exercise_E");
  let numStars = Number(div.querySelector("#input5A").value);
  let maxNum = Number(div.querySelector("#input5B").value);
  let count = numStars;
  let html = "";
  if (numStars > 0 && maxNum > 0) {
    while (count > 0) {
      if (count < maxNum && maxNum < numStars) {
        for (let z = 0; z <= count; z++) {
          count--;
          html += "*";
        }
      } else {
        for (let z = 0; z < maxNum; z++) {
          count--;
          html += "*";
        }
      }
      html += "<br>";
    }
  } else {
    alert("Values must be larger then 0");
  }

  htmlOut.innerHTML = html;
}

function exercise6() {
  let div = document.querySelector("#Exercise_F");
  let input = "";
  input += div.querySelector("#input6").value;
  input = input.toLowerCase();
  let outputDivA = div.querySelector("#output6A");
  outputDivA.classList.remove("hidden");
  outputDivA.classList.add("output");

  let outputDivB = div.querySelector("#output6B");
  outputDivB.classList.remove("hidden");
  outputDivB.classList.add("output");

  let splitString = input.split("");
  let outString = "<p>";
  let count = 0;
  for (let z = 0; z < splitString.length; z++) {
    let temp = splitString[z];
    if (
      temp === "a" ||
      temp === "e" ||
      temp === "i" ||
      temp === "o" ||
      temp === "u"
    ) {
      splitString[z] = "*";
      count++;
    }
  }
  for (let z = 0; z < splitString.length; z++) {
    outString += splitString[z];
  }
  outString += "</p>";
  outputDivA.innerHTML = count;
  outputDivB.innerHTML = outString;
}

function exercise7() {
  let input = document.querySelector("#input7").value;
  let innum = +input;

  let output = document.querySelector("#output7");
  output.classList.remove("hidden");
  output.classList.add("output");

  if (innum < 1) {
    alert("Error: Items entered less than 0");
    return;
  }

  let shipcost = 0;
  let itemcost = 0;
  let totalcost = 0;
  let tax = 0;

  if (innum < 100) {
    shipcost = 5;
  } else if (innum >= 100 && innum <= 1000) {
    shipcost = 4;
  } else {
    shipcost = 3;
  }

  itemcost = innum * shipcost;
  tax = itemcost * 0.15;
  totalcost = itemcost + tax;

  html = "<ul>";
  html += `<li>Base Cost: ${itemcost}</li>`;
  html += `<li>Tax: ${tax}</li>`;
  html += `<li>Total: ${totalcost}</li>`;

  output.innerHTML = html;
}

function exercise8() {
  input = document.querySelector("#input8").value;
  numinput = +input;

  let output = document.querySelector("#output8");
  output.classList.remove("hidden");
  output.classList.add("output");

  if (numinput < 1) {
    alert("You have to buy at least 1 Snicker bar");
    return;
  }

  let box = numinput / 24;
  let boxround = Math.floor(box);
  let bar = numinput % 24;

  let barcost = 1.75;
  let boxcost = 32;

  let totalbarcost = barcost * bar;
  let totalboxcost = boxcost * boxround;

  let totalcost = totalbarcost + totalboxcost;

  let html = "<ul>";
  html += `<li>Number of Boxes: ${boxround}</li>`;
  html += `<li>Number of Singles: ${bar}</li>`;
  html += `<li>Cost of Boxes: ${totalboxcost}</li>`;
  html += `<li>Cost of Singles: ${totalbarcost}</li>`;
  html += `<li>Total Cost: ${totalcost}</li>`;

  output.innerHTML = html;

  console.log(boxround);
}

function exercise9() {
  let input = document.querySelector("#input9").value;
  let temp = input.split("");
  let numArray = [];

  let output = document.querySelector("#output9");
  output.classList.remove("hidden");
  output.classList.add("output");

  for (i = 0; i < temp.length; i++) {
    numArray[i] = +temp[i];
    if (!(numArray[i] === 0 || numArray[i] === 1)) {
      alert("Please enter only 0's and 1's as input");
      return;
    }
  }

  let total = 0;
  let html1 = "";
  let html2 = "";

  for (i = 1; i < numArray.length + 1; i++) {
    if (numArray[i - 1] === 1) {
      let number = Math.pow(2, numArray.length - i);
      total += number;

      if (i === numArray.length) {
        html1 += ` 2<sup>${numArray.length - i}</sup> = `;
        html2 += ` 1 = ${total}`;
      } else {
        html1 += ` 2<sup>${numArray.length - i}</sup> + `;
        html2 += ` ${number} + `;
      }
    }
  }

  output.innerHTML = html1 + html2;
}

function exercise10() {
  let div = document.querySelector("#Exercise_J");
  let sideA = Number(div.querySelector("#input10A").value);
  let sideB = Number(div.querySelector("#input10B").value);
  let sideC = Number(div.querySelector("#input10C").value);
  let outString = "<p>";
  let htmlDiv = document.querySelector("#output10");
  htmlDiv.classList.remove("hidden");
  htmlDiv.classList.add("output");

  // Handle error Message
  if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
    alert("One of the sides is less than 0");
  } else if (sideA > 180 || sideB > 180 || sideC > 180) {
    alert("Invalid Triangle");
  } else if (sideA + sideB + sideC != 180) {
    alert("Invalid triangle");
  } else {
    if (sideA === 90 || sideB === 90 || sideC === 90) {
      outString += "Right Triangle";
    } else if (sideA > 90 || sideB > 90 || sideC > 90) {
      outString += "Obtuse Triangle";
    } else if (sideA < 90 && sideB < 90 && sideC < 90) {
      outString += "Acute Triangle";
    }
  }
  outString += "</>";
  htmlDiv.innerHTML = outString;
}
