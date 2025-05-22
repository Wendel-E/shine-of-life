const accordions = document.querySelectorAll(".accordion-toggle");

accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

const textareas = document.querySelectorAll('textarea');

textareas.forEach(textarea => {
  textarea.setAttribute('style', 'height:auto;overflow-y:hidden;');
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta para a altura do conteúdo
  });
});

const textarea = document.getElementById('d-skill1');
const textarea = document.getElementById('d-skill2');
const textarea = document.getElementById('d-skill3');
const textarea = document.getElementById('d-skill4');

  // Carrega o conteúdo salvo, se existir
  textarea.value = localStorage.getItem('textoSalvo') || '';

  // Salva sempre que o usuário digitar
  textarea.addEventListener('input', () => {
    localStorage.setItem('textoSalvo', textarea.value);
  });
