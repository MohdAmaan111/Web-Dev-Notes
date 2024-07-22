function displayfirstline() {
  document.getElementById("firstlineoutput").style.display = "block";
  document.getElementById("firstlineoutput").innerHTML = `
      <head>
            <style>
                .firstline p::first-line {
                color: red;
                font-variant: small-caps;
              }
            </style>
        </head>
        <body>
        <div class="firstline">
        <p>
              You can use the ::first-line pseudo-element to add a special effect to the first 
              line of a text. Some more text. And even more, and more, and more, and more, and 
              more, and more, and more, and more, and more, and more, and more, and more.
              </p>
        </div>
        </body>`;
}
function displayfirstletter() {
  document.getElementById("firstletteroutput").style.display = "block";
  document.getElementById("firstletteroutput").innerHTML = `
      <head>
            <style>
                .firstletter p::first-letter {
                color: red;
                font-size: xx-large;
              }
            </style>
        </head>
        <body>
        <div class="firstletter">
        <p>
              You can use the ::first-letter pseudo-element to add a special effect to the 
              first character of a text!
              </p>
        </div>
        </body>`;
}
function displaymultiplepseudo() {
  document.getElementById("multiplepseudooutput").style.display = "block";
  document.getElementById("multiplepseudooutput").innerHTML = `
      <head>
            <style>
                .multiplepseudo p::first-letter {
                color: red;
                font-size: xx-large;
              }
                  .multiplepseudo p::first-line {
                  color: blue;
                  font-variant: small-caps;
              }
            </style>
        </head>
        <body>
        <div class="multiplepseudo">
        <p>
              You can combine the ::first-letter and ::first-line pseudo-elements to add 
              a special effect to the first letter and the first line of a text!
        </p>
        </div>
        </body>`;
}
function displaybeforeafterelement() {
  document.getElementById("beforeafterelementoutput").style.display = "block";
  document.getElementById("beforeafterelementoutput").innerHTML = `
      <head>
            <style>
                .beforeelement h1::before {
                content: "Note: ";
                font-weight: bold;
                color: red;
              }
                .afterelement h1::after {
                content: " [Read more]";
                font-weight: bold;
                color: green;
          }
            </style>
        </head>
        <body>
        <div class="beforeelement afterelement">
          <h1>This is a heading</h1>
          <p>The ::before pseudo-element inserts content before the content of an element.</p>
          <h1>This is a heading</h1>
        </div>
        </body>`;
}
function displaymarkerpseudo() {
  document.getElementById("markerpseudooutput").style.display = "block";
  document.getElementById("markerpseudooutput").innerHTML = `
      <head>
            <style>
                .markerpseudo li::marker { 
                  color: red;
                  font-size: 23px;
            }
            </style>
        </head>
        <body>
        <div class="markerpseudo">
        <p>
          <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          </ul>
          <ol>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          </ol>
        </p>
        </div>
        </body>`;
}
function displayselectionpseudo() {
  document.getElementById("selectionpseudooutput").style.display = "block";
  document.getElementById("selectionpseudooutput").innerHTML = `
      <head>
            <style>
                .selectionpseudo p::selection {
                color: red;
                background: yellow;
              }
                .selectionpseudo div::selection {
                color: red;
                background: yellow;
              }
            </style>
        </head>
        <body>
        <div class="selectionpseudo">
              <h1>Select some text on this page:</h1>
              <p>This is a paragraph.</p>
              <div>This is some text in a div element.</div>
        </div>
        </body>`;
}
