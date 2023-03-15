const switchThemeButtonElement: HTMLButtonElement =
  document.querySelector("#theme-button");

let theme: string = localStorage.getItem("theme");

switchThemeButtonElement.addEventListener("click", () => {
  if (theme === "dark") {
    document.querySelector("body").classList.remove("dark");
    document.querySelector("body").classList.add("light");
    theme = "light";
  } else {
    document.querySelector("body").classList.remove("light");
    document.querySelector("body").classList.add("dark");
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
  document.querySelector("body").classList.add("ligh");
}
