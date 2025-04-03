document.querySelector("#mudarTema").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  document.querySelector("html").classList.toggle("dark-mode");
});