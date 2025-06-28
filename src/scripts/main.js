AOS.init();

const anoAtual = new Date().getFullYear();
let anoEvento = anoAtual

function atualizaDataEvento() {
    return new Date(`Sep 01, ${anoEvento} 06:40:00`);
}

let dataEvento = atualizaDataEvento();
let timeStampEvento = dataEvento.getTime();

const contaOTempo = setInterval(function () {
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    if (timeStampEvento - timeStampAgora < 0) {
        anoEvento += 1;
        dataEvento = atualizaDataEvento();
        timeStampEvento = dataEvento.getTime();
    }

    const tempoEvento = timeStampEvento - timeStampAgora;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60;
    const segundosMs = 1000;

    const diasEvento = Math.floor(tempoEvento / diasMs);
    const horasEvento = Math.floor((tempoEvento % (diasMs)) / (horasMs));
    const minutosEvento = Math.floor((tempoEvento % (horasMs)) / (minutosMs));
    const segundosEvento = Math.floor((tempoEvento % (minutosMs)) / (segundosMs));

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;
}, 1000)