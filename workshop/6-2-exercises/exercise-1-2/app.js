// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let btn = document.querySelector("#btn-list");

for (let i = 0; i < 4; i++) {
  // this specifies or targets the DOM of the element that we want
  let btnDesc = document.getElementById(`btn-${i}`);

  //initializes the opacity and background color of the button
  btnDesc.style.opacity = "100";
  btnDesn.style.backgroundColor = "gold";
}

//build a function that accepts 2 arguments, id and color and set them to
function toggleColor(id, color) {
  let btnElement = document.getElementById(id);
  let currentColor = btnElement.style.backgroundColor;

  //if the current background color set on the button is gold, reinitialize it to the color supplied by the handleClick function
  if (currentColor === "gold") btnElement.style.backgroundColor = color;
  else btnElement.style.backgroundColor = "gold";
}
function handleClick(event) {
  let btnId = event.target.id;
  let btnElement = document.getElementById("#btnId");

  switch (btnId) {
    case "btn-1":
      /* sets the toggle for the opacity of the button.
     if the opacity is at '100' then set it to '0', else set it to '100' */
      if (btnElement.style.opacity === "100") btnElement.style.opacity = "0";
      else btnElement.style.opacity = "100";
      break;
    case "btn-2":
      //takes the btnId and the color to toggle to and calls the toggleColor function
      toggleColor(btnId, "crimson");
      break;
    case "btn-3":
      toggleColor(btnId, "lightblue");
      break;
    case "btn-4":
      // btnElement.classList.add("jitters");
      // instead of adding 'jitters' into the class list, it sets the boolean true or false

      btnElement.classList.toggle("jitters");
      break;
    default:
      break;
  }
}

btn.addEventListener("click", handleClick);
