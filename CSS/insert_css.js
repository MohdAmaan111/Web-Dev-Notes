function displayattributeselector() {
  document.getElementById("attributeselectoroutput").style.display = "block";
  document.getElementById("attributeselectoroutput").innerHTML = `
        <head>
              <style>
                  .attributeselector a[target] {
                   background-color: yellow;
              }
              </style>
          </head>
          <body>
          <div class="attributeselector">
          <p>
            The links with a target attribute gets a yellow background:
            </p>
            <a href="https://www.w3schools.com">w3schools.com</a>
            <a href="https://www.disney.com" target="_blank">disney.com</a>
            <a href="https://www.wikipedia.com" target="_top">wikipedia.com</a>
          </div>
          </body>`;
}
function displayattributevalues() {
  document.getElementById("attributevaluesoutput").style.display = "block";
  document.getElementById("attributevaluesoutput").innerHTML = `
        <head>
              <style>
                  .attributevalues a[target="_blank"] {
                   background-color: yellow;
              }
              </style>
          </head>
          <body>
          <div class="attributevalues">
          <p>
            The links with a target attribute gets a yellow background:
            </p>
            <a href="https://www.w3schools.com">w3schools.com</a>
            <a href="https://www.disney.com" target="_blank">disney.com</a>
            <a href="https://www.wikipedia.com" target="_top">wikipedia.com</a>
          </div>
          </body>`;
}
function displayattributevalues2() {
  document.getElementById("attributevalues2output").style.display = "block";
  document.getElementById("attributevalues2output").innerHTML = `
        <head>
              <style>
                  .attributevalues2  [title~="Anime"] {
            border: 5px solid red;
          }
              }
              </style>
          </head>
          <body>
          <div class="attributevalues2">
          <p>
            All images with the title attribute containing the word "Anime" get a yellow border.
              </p>
              <img src="../Images/Pikachu.jpg" title="Pikachu Anime" width="150" height="150">
              <img src="../Images/Goku.jpg" title="Goku Anime" width="224" height="230">
              <img src="../Images/Spiderman.jpg" title="Spiderman Cartoon" width="250" height="358">
          </div>
          </body>`;
}
function displayattributevalues3() {
  document.getElementById("attributevalues3output").style.display = "block";
  document.getElementById("attributevalues3output").innerHTML = `
        <head>
              <style>
                  .attributevalues3 [class|="top"] {
                       border: 4px solid yellow;
                       background: red;
                    }
              </style>
          </head>
          <body>
          <div class="attributevalues3">
            <h2>CSS [attribute|="value"] Selector</h2>

            <h1 class="top-header">Welcome</h1>
            <p class="text-top">Hello world!</p>
            <p class="topcontent">Are you learning CSS?</p>
          </body>`;
}
function displayattributevalues4() {
  document.getElementById("attributevalues4output").style.display = "block";
  document.getElementById("attributevalues4output").innerHTML = `
          <head>
                <style>
                    .attributevalues4 [class^="top"] {
                        background: red;
                }
                </style>
            </head>
            <body>
            <div class="attributevalues4">
              <h2>CSS [attribute^="value"] Selector</h2>
  
              <h1 class="top-header">Welcome</h1>
              <p class="text-top">Hello world!</p>
              <p class="topcontent">Are you learning CSS?</p>
            </body>`;
}
function displayattributevalues5() {
  document.getElementById("attributevalues5output").style.display = "block";
  document.getElementById("attributevalues5output").innerHTML = `
            <head>
                  <style>
                      .attributevalues5 [class$="test"] {
                           background: red;
                  }
                  }
                  </style>
              </head>
              <body>
              <div class="attributevalues5">
              <h2>CSS [attribute$="value"] Selector</h2>

              <div class="first_test">The first div element.</div>
              <div class="second">The second div element.</div>
              <div class="my-test">The third div element.</div>
              <p class="mytest">This is some text in a paragraph.</p>
              </div>
              </body>`;
}
function displayattributevalues6() {
  document.getElementById("attributevalues6output").style.display = "block";
  document.getElementById("attributevalues6output").innerHTML = `
              <head>
                    <style>
                        .attributevalues6 [class*="te"] {
                            background: red;
                        }
                    </style>
                </head>
                <body>
                <div class="attributevalues6">
                <h2>CSS [attribute*="value"] Selector</h2>
  
                <div class="first_test">The first div element.</div>
                <div class="second">The second div element.</div>
                <div class="test-third">The third div element.</div>
                <p class="mytest">This is some text in a paragraph.</p>
                </div>
                </body>`;
}
function displayattributestylingform() {
  document.getElementById("attributestylingformoutput").style.display = "block";
  document.getElementById("attributestylingformoutput").innerHTML = `
              <head>
                    <style>
                        input[type="text"] {
            width: 150px;
            display: block;
            margin-bottom: 10px;
            background-color: yellow;
          }
          
          input[type="button"] {
            width: 120px;
            margin-left: 35px;
            display: block;
          }
                    </style>
                </head>
                <body>
                <h2>Styling Forms</h2>

          <form name="input" action="" method="get">
          Firstname:<input type="text" name="Name" value="Peter" size="20">
          Lastname:<input type="text" name="Name" value="Griffin" size="20">
          <input type="button" value="Example Button">
          </form>
                </body>`;
}
