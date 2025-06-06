// Abrir e fechar gavetas de texto
const accordions = document.querySelectorAll(".accordion-toggle");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Salva e restaura conteúdo dos textareas automaticamente
document.querySelectorAll("textarea").forEach((textarea, index) => {
  const key = "textarea-content-" + index;

  // Restaurar conteúdo salvo
  const saved = localStorage.getItem(key);
  if (saved !== null) {
    textarea.value = saved;
  }

  // Salvar ao digitar
  textarea.addEventListener("input", () => {
    localStorage.setItem(key, textarea.value);
  });
});
