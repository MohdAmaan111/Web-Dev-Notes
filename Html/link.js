function displaylinktag() {
  document.getElementById("linkoutput").style.display = "block";
  document.getElementById("linkoutput").innerHTML = `
          <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>`;
}
function displaybookmarktag() {
  document.getElementById("bookmarkoutput").style.display = "block";
  document.getElementById("bookmarkoutput").innerHTML = `
            <a href="#imagelinkbookmark">Image as Link</a>`;
}
function displayparabookmarktag() {
  document.getElementById("parabookmarkoutput").style.display = "block";
  document.getElementById("parabookmarkoutput").innerHTML = `
              <a href="html_tags.html#paragraphbookmark">Paragraph Tag</a>`;
}
