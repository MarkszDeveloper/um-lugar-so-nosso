// O import ta usando CDN pra rodar no HTML sem precisar dar run nesse arquivo
import { intervalToDuration } from "https://esm.sh/date-fns";

const dataMeta = new Date("2026-11-01");
const dataAtual = new Date();

function atualizarData() {
    const duracaoTotal = intervalToDuration({
        start: dataAtual,
        end: dataMeta
    });

    document.querySelector("#tempo-mes").textContent = duracaoTotal.months? duracaoTotal.months : "00";
    document.querySelector("#tempo-dias").textContent = duracaoTotal.days? duracaoTotal.days : "00";
    document.querySelector("#tempo-horas").textContent = duracaoTotal.hours? duracaoTotal.hours : "00";
    document.querySelector("#tempo-minutos").textContent = duracaoTotal.minutes? duracaoTotal.minutes : "00";
    document.querySelector("#tempo-segundos").textContent = duracaoTotal.seconds? duracaoTotal.seconds : "00";
    console.log(duracaoTotal);
}

setInterval(atualizarData, 1000);
atualizarData();
