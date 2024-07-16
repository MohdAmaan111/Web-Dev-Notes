function displaybtag() {
  document.getElementById("boutput").style.display = "block";
  document.getElementById("boutput").innerHTML = `
      <p>The following word uses a <b>bold</b> typeface.</p>`;
}
function displayitag() {
  document.getElementById("ioutput").style.display = "block";
  document.getElementById("ioutput").innerHTML = `
        <p>The following word uses a <i>italicized</i> typeface.</p>`;
}
