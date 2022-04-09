document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]") // if the element that got clicked has this data attribute assign to isDropdownButton
  if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return
  // this is saying if the thing you are clicking doesn't have data attribute of data-dropdown-button and has a parent that matches data-dropdown attribute, you want to ignore the click


  let currentDropdown;
  if (isDropdownButton) { // if we are clicking a dropdown button add active class
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    if (dropdown === currentDropdown) return //if dropdown is the one we currently have open don't do anything
    dropdown.classList.remove('active') // otherwise remove active class from all dropdowns
  })
})

//every time we click on the document this whole block of code is being ran