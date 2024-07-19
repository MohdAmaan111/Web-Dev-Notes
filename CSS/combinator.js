function displaydescendanttag() {
  document.getElementById("descendantoutput").style.display = "block";
  document.getElementById("descendantoutput").innerHTML = `
      <head>
            <style>
              .descendantselector p {
              color: blue;
              }
            </style>
        </head>
        <body>
            <div class="descendantselector">
            <p>
               This paragraph is inside a div and will be blue.
            </p>
            <section>
                <p>
                  This paragraph is inside a section which is inside a 
                  div and will also be blue.
                </p>
            </section>
            </div>
            <p>
                  This paragraph is outside the div and will not be blue.
            </p>
        </body>`;
}
function displaychildtag() {
  document.getElementById("childoutput").style.display = "block";
  document.getElementById("childoutput").innerHTML = `
      <head>
            <style>
              .childselector > p {
              color: blue;
              }
            </style>
        </head>
        <body>
            <div class="childselector">
            <p>
               This paragraph is inside a div and will be blue.
            </p>
            <section>
                <p>
                  This paragraph is inside a section which 
                  is inside a div and will not be blue 
                  as this is not direct child.
                </p>
            </section>
            </div>
            <p>
                  This paragraph is outside the div and will not be blue.
            </p>
        </body>`;
}
function displayadjacenttag() {
  document.getElementById("adjacentoutput").style.display = "block";
  document.getElementById("adjacentoutput").innerHTML = `
      <head>
            <style>
            .adjacentselector + p {
            color: blue;
            }
        </style>
        </head>
        <body>
            <p>
               This paragraph is above the div 
               and will not be blue
            </p>
        <div class="adjacentselector">
            <p>
                  This paragraph is inside a div 
                  and will not be blue.
            </p>
        </div>
            <p>
               This paragraph 1 after the div 
               and will be blue.
            </p>
            <p>This paragraph 2 after the 
               div and will not be blue.
            </p>
        </body>`;
}
function displaysiblingtag() {
  document.getElementById("siblingoutput").style.display = "block";
  document.getElementById("siblingoutput").innerHTML = `
      <head>
            <style>
              .siblingselector ~ p {
                       color: blue;
              }
            </style>
        </head>
        <body>
              <p>
                  This paragraph is above the div and will not be blue.
              </p>
          <div class="siblingselector">
              <p>
                  This paragraph is inside a div and will not be blue.
              </p>
          </div>
              <p>This paragraph 1 after the div and will be blue.
              </p>
              <p>This paragraph 2 after the div and will be blue.
              </p>
        </body>`;
}
