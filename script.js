const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".menu-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // tirar "active" de todos
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    items.forEach((item) => {
      const category = item.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
