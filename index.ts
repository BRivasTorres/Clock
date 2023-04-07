window.addEventListener("load", () => {
    const horaHTML: HTMLElement | null = document.getElementById("hora");
    const minutoHTML: HTMLElement | null = document.getElementById("minuto");
    const segundoHTML: HTMLElement | null = document.getElementById("segundo");

    const mostrarHora = (): void => {
        const fecha: Date = new Date();
        const hora: number = fecha.getHours();
        const minuto: number = fecha.getMinutes();
        const segundo: number = fecha.getSeconds();

        if (horaHTML && minutoHTML && segundoHTML) {
            horaHTML.textContent = String(hora).padStart(2, "0");
            minutoHTML.textContent = String(minuto).padStart(2, "0");
            segundoHTML.textContent = String(segundo).padStart(2, "0");
        }

        setTimeout(mostrarHora, 1000);
    };

    mostrarHora();
});

