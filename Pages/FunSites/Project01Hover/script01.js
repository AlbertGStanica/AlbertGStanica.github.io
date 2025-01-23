window.onload = function () {
  //constructTable(9, 9);
  let btnBuild = document.querySelector("#build");
  btnBuild.addEventListener("click", constructTable);
};

function constructTable() {
  let rowSize = Number(document.querySelector("#rowSize").value);
  let colSize = Number(document.querySelector("#colSize").value);
  let tableArea = document.querySelector("#table");
  let hTMLString = "<table>";
  for (let z = 0; z < rowSize; z++) {
    hTMLString += "<tr>";
    for (let x = 0; x < colSize; x++) {
      hTMLString += "<td>-_-</td>";
    }
    hTMLString += "</tr>";
  }
  hTMLString += "</table>";
  tableArea.innerHTML = hTMLString;
}
