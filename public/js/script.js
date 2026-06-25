function selecionar(elemento) {
    document.querySelectorAll('.emote-box').forEach(el => {
        el.classList.remove('selecionado');
    });
    elemento.classList.add('selecionado');
}