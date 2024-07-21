function displayanchortag() {
  document.getElementById("anchoroutput").style.display = "block";
  document.getElementById("anchoroutput").innerHTML = `
      <head>
            <style>
                .changelink:link {
                  color: red;
                }
                .changevisitedlink:visited {
                  color: pink;
                }
                .changeonhover:hover {
                  background-color: peachpuff;
                  color: green;
                  font-size: 2em;
                }
                .changeonactive:active {
                  background-color: yellow;
                }
                .changeonfocus:focus {
                  background-color: green;
                }
            </style>
        </head>
        <body>
            <h2>Pseudo-class selector</h2>
              <p>Change the following unvisited link</p>
              <a class="changelink" href="https://www.tutorialspoint.com">
                Tutorialspoint
              </a>
              <p>Change the visited link</p>
              <a class="changevisitedlink" href="">
                Tutorialspoint
              </a>
              <p>Change the following link on hover</p>
              <a class="changeonhover" href="https://www.tutorialspoint.com">
                Tutorialspoint
              </a>
              <p>Change background color on clicking button</p>
              <button class="changeonactive">Click Me</button>
              <p>Change background color on focusing input</p>
              <input class="changeonfocus" type="text">
        </body>`;
}
function displaytooltip() {
  document.getElementById("tooltipoutput").style.display = "block";
  document.getElementById("tooltipoutput").innerHTML = `
      <head>
            <style>
              .tooltiptext {
                display: none;
                background-color: darkred;
                padding: 20px;
              }
              .tooltiphover:hover p {
                display: block;
              }
            </style>
        </head>
        <body>
            <div class="tooltiphover">Hover over this div element to show the p element
              <p class="tooltiptext">
                  Hello! Here I am!
              </p>
            </div>
        </body>`;
}
function displayfirstchildpseudo() {
  document.getElementById("firstchildpseudooutput").style.display = "block";
  document.getElementById("firstchildpseudooutput").innerHTML = `
        <head>
              <style>
                .firstchild:first-child {
                      color: blue;
                  } 
              </style>
          </head>
          <body>
              <p class="firstchild">This is some text.</p>
              <p class="firstchild">This is some text.</p>
              <div>
                  <p class="firstchild">This is some text.</p>
                  <p class="firstchild">This is some text.</p>
              </div>
          </body>`;
}
function displayfirstchildpseudo2() {
  document.getElementById("firstchildpseudo2output").style.display = "block";
  document.getElementById("firstchildpseudo2output").innerHTML = `
          <head>
                <style>
                  .firstchild2 i:first-child {
                    color: blue;
                }
                </style>
            </head>
            <body>
                <p class="firstchild2">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                <p class="firstchild2">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
            </body>`;
}
function displayfirstchildpseudo3() {
  document.getElementById("firstchildpseudo3output").style.display = "block";
  document.getElementById("firstchildpseudo3output").innerHTML = `
            <head>
                  <style>
                    .firstchild3:first-child i {
                        color: blue;
                    } 
                  </style>
              </head>
              <body>
                   <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                   <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                   <div>
                        <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                        <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                        <div>
                            <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                            <p class="firstchild3">I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
                        </div>
                    </div>
              </body>`;
}
function displaylastchildpseudo() {
  document.getElementById("lastchildpseudooutput").style.display = "block";
  document.getElementById("lastchildpseudooutput").innerHTML = `
            <head>
                  <style>
                    .lastchild:last-child {
                          color: blue;
                      } 
                  </style>
              </head>
              <body>
                  <p class="lastchild">This is some text.</p>
                  <p class="lastchild">This is some text.</p>
                  <div>
                      <p class="lastchild">This is some text.</p>
                      <p class="lastchild">This is some text.</p>
                  </div>
              </body>`;
}
function displaynthchild() {
  document.getElementById("nthchildoutput").style.display = "block";
  document.getElementById("nthchildoutput").innerHTML = `
              <head>
                    <style>
                        /* Selects the second element of div siblings */
                        #nthDiv div:nth-child(2) {
                           background: red;
                        }

                        /* Selects the second li element in a list */
                        #nthDiv li:nth-child(2) {
                           background: lightgreen;
                        }

                        /* Selects every third element among any group of siblings */
                        #nthDiv :nth-child(3) {
                           background: grey;
                        }
                        /* Selects every even element of div siblings */
                        #nthDiv div:nth-child(even) {
                           border:6px solid green;
                        }
                        /* Selects every odd element in a list */
                        #nthDiv li:nth-child(odd) {
                           border:6px solid white;
                        }
                    </style>
                </head>
                <body>
                <div id="nthDiv">
                        <div class="nthDiv">
                           <p>This is some text.</p>
                        </div>

                        <div class="nthDiv">
                            <p>This is some text.</p>
                        </div>

                        <div class="nthDiv">
                            <p>This is some text.</p>
                        </div>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item</li>
                            <li>Third list item</li>
                            <li>Fourth list item</li>
                            <li>Fifth list item</li>
                        </ul>
                </div>
                </body>`;
}
function displaynotselector() {
  document.getElementById("notselectoroutput").style.display = "block";
  document.getElementById("notselectoroutput").innerHTML = `
              <head>
                    <style>
                      .notselector p{
                          color: red;
                      }
                      .notselector:not(p) {
                          color: green;
                      }
                    </style>
                </head>
                <body>
                <div class="notselector">
                    <h1>This is a heading</h1>
  
                    <p>This is a paragraph.</p>
                    <p>This is another paragraph.</p>
  
                    <div>This is some text in a div element.</div>
                </div>
                </body>`;
}
function displaylangpseudo() {
  document.getElementById("langpseudooutput").style.display = "block";
  document.getElementById("langpseudooutput").innerHTML = `
              <head>
                    <style>
                      q:lang(no) {
                          quotes: "~" "~";
                      }
                    </style>
                </head>
                <body>
                    <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
                </body>`;
}
