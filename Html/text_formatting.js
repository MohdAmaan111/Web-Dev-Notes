const codeBlock = document.getElementById("code-block");
codeBlock.innerHTML = syntaxHighlight(codeBlock.innerHTML);
function displaybtag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `Anything that appears within &lt;b&gt;...&lt;/b&gt; element, is
        displayed in Bold text.`;
  document.getElementById("output").innerHTML = `
      <p>The following word uses a <b>bold</b> typeface.</p>`;
}
function displayitag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `Anything that appears within &lt;i&gt;...&lt;/i&gt; element is displayed
        in Italic Text.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <i>italicized</i> typeface.</p>`;
}
function displaystrongtag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;strong&gt; element defines text with strong importance.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <strong>strong</strong> typeface.</p>`;
}
function displaysmalltag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The content of the &lt;small&gt;...&lt;/small&gt; element is displayed
        font size smaller than the rest of the text.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <small>small</small> typeface.</p>`;
}
function displaybigtag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The content of the &lt;big&gt;...&lt;/big&gt; element is displayed font
        size larger than the rest of the text.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <big>big</big> typeface.</p>`;
}
function displaymarktag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;mark&gt; element defines text that should be marked or
        highlighted.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <mark>mark</mark> typeface.</p>`;
}
function displaydeltag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;del&gt; element defines text that has been deleted from a
        document.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <del>delete</del> typeface.</p>`;
}
function displayinstag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;ins&gt; element defines a text that has been inserted into
        a document.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <del>delete</del> <ins>inserted</ins> typeface.</p>`;
}
function displaysubtag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;sub&gt; element defines text appears half a character below the normal line.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <sub>subscripted</sub> typeface.</p>`;
}
function displaysuptag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `The HTML &lt;sup&gt; element defines text appears half a character above the normal line.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <sup>superscripted</sup> typeface.</p>`;
}
function displayutag() {
  document.getElementById(
    "headingDiv"
  ).innerHTML = `Anything that appears within &lt;u&gt;...&lt;/u&gt; element is displayed
        with Underline.`;
  document.getElementById("output").innerHTML = `
        <p>The following word uses a <u>underlined</u> typeface.</p>`;
}
function displayblockquotetag() {
  document.getElementById("blockquoteoutput").style.display = "block";
  document.getElementById("blockquoteoutput").innerHTML = `
        <p>Here is a quote from WWF's website:</p>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
        </blockquote>`;
}
function displayqtag() {
  document.getElementById("qoutput").style.display = "block";
  document.getElementById("qoutput").innerHTML = `
        <p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>`;
}
function displayabbrtag() {
  document.getElementById("abbroutput").style.display = "block";
  document.getElementById("abbroutput").innerHTML = `
        <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>`;
}
function displayaddresstag() {
  document.getElementById("addressoutput").style.display = "block";
  document.getElementById("addressoutput").innerHTML = `
  <p>The HTML address element defines contact information of article.</p>
        <address>
          Written by John Doe.<br>
          Visit us at:<br>
          Example.com<br>
          Box 564, Disneyland<br>
          USA
          </address>`;
}
function displaycitetag() {
  document.getElementById("citeoutput").style.display = "block";
  document.getElementById("citeoutput").innerHTML = `
        <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>`;
}
function displaybdotag() {
  document.getElementById("bdooutput").style.display = "block";
  document.getElementById("bdooutput").innerHTML = `
        <p></p><bdo dir="ltr">This text will be written from left to right</bdo></p>
        <p><bdo dir="rtl">This text will be written from right to left</bdo></p>`;
}
