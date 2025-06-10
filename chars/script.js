// Abrir e fechar gavetas de texto
const accordions = document.querySelectorAll(".accordion-toggle");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
