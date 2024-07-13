function changetoh1() {
  document.getElementById("output").innerHTML = "<h1>This is Heading 1</h1>";
  document.getElementById("headingDiv").innerHTML = "h1 Tag";
}
function changetoh2() {
  document.getElementById("output").innerHTML = "<h2>This is Heading 2</h2>";
  document.getElementById("headingDiv").innerHTML = "h2 Tag";
}
function changetoh3() {
  document.getElementById("output").innerHTML = "<h3>This is Heading 3</h3>";
  document.getElementById("headingDiv").innerHTML = "h3 Tag";
}
function changetoh4() {
  document.getElementById("output").innerHTML = "<h4>This is Heading 4</h4>";
  document.getElementById("headingDiv").innerHTML = "h4 Tag";
}
function changetoh5() {
  document.getElementById("output").innerHTML = "<h5>This is Heading 5</h5>";
  document.getElementById("headingDiv").innerHTML = "h5 Tag";
}
function changetoh6() {
  document.getElementById("output").innerHTML = "<h6>This is Heading 6</h6>";
  document.getElementById("headingDiv").innerHTML = "h6 Tag";
}
function displayptag() {
  document.getElementById("onlyoutput").style.display = "block";
  document.getElementById("onlyoutput").innerHTML = `
    <p>Here is a first paragraph of text.</p>
    <p>Here is a second paragraph of text.</p>
    <p>Here is a third paragraph of text.</p>`;
}
