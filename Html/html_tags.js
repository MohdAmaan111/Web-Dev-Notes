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
  document.getElementById("poutput").style.display = "block";
  document.getElementById("poutput").innerHTML = `
    <p>Here is a first paragraph of text.</p>
    <p>Here is a second paragraph of text.</p>
    <p>Here is a third paragraph of text.</p>`;
}
function displayhrtag() {
  document.getElementById("hroutput").style.display = "block";
  document.getElementById("hroutput").innerHTML = `
    <h1>This is heading 1</h1>
    <p>This is some text.</p>
    <hr>
    <h2>This is heading 2</h2>
    <p>This is some other text.</p>
    <hr>`;
}
function displaybrtag() {
  document.getElementById("broutput").style.display = "block";
  document.getElementById("broutput").innerHTML = `
    <p>This is<br>a paragraph<br>with line breaks.</p>`;
}
function displaycentertag() {
  document.getElementById("centeroutput").style.display = "block";
  document.getElementById("centeroutput").innerHTML = `
    <p>This text is not in the center.</p>
    <center>
    <p>This text is in the center.</p>
    </center>`;
}
function displaypretag() {
  document.getElementById("preoutput").style.display = "block";
  document.getElementById("preoutput").innerHTML = `
    <pre>
    My Bonnie lies over the ocean.

    My Bonnie lies over the sea.

    My Bonnie lies over the ocean.

    Oh, bring back my Bonnie to me.
    </pre>`;
}
