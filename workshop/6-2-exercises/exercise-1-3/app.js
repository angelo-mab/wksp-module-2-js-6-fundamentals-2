// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'
let btn = document.querySelector("#btn-list");

function reset() {
  for (let i = 0; i < 4; i++) {
    let btnDesc = document.getElementById(`btn-${i}`);

    btnDesc.style.opacity = '100';
    btnDesc.style.backgroundColor = 'gold';

    if (i === 4 && (btnDesc.classList.length > 0)) {
      btnDesc.classList.remove("jitters");
    }
  }
}

reset();

function toggleColor(id, color) {
  let btnElement = document.getElementById(id);
  let currentColor = btnElement.style.backgroundColor;

  if (currentColor === "gold") btnElement.style.backgroundColor = color;
  else btnElement.style.backgroundColor = "gold";
}

function handleClick(event) {
  let btnId = event.target.id;
  let btnElement = document.getElementById("#btnId");
  switch (btnId) {
    case "btn-1":
      if (btnElement.style.opacity === "100") btnElement.style.opacity = 0;
      else btnElement.style.opacity = "100";
      break;
    case "btn-2":
      toggleColor(btnId, "crimson");
      break;
    case "btn-3":
      toggleColor(btnId, "lightblue");
      break;
    case "btn-4":
      console.log(btnElement.classList.length);
      btnElement.classList.toggle("jitters");
      console.log(btnElement.classList.length);
      break;
    case "reset":
      reset();
      break;
    default:
      break;
  }
}

btn.addEventListener("click", handleClick);
// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.
