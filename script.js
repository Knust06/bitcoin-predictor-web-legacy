import { Chart } from "@/components/ui/chart"
// Dados para o gráfico
const chartData = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
    "Jan 25",
    "Fev 25",
    "Mar 25",
  ],
  datasets: [
    {
      label: "Preço Histórico",
      data: [42000, 45000, 48000, 52000, 49000, 55000, 58000, 62000, 59000, 67000, 71000, 68000, null, null, null],
      borderColor: "#f97316",
      backgroundColor: "rgba(249, 115, 22, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Previsão",
      data: [null, null, null, null, null, null, null, null, null, null, null, 68000, 75000, 78000, 82000],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      fill: true,
      tension: 0.4,
      borderDash: [5, 5],
    },
  ],
}

// Configuração do gráfico
const chartConfig = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#cbd5e1",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#9ca3af",
        },
        grid: {
          color: "rgba(55, 65, 81, 0.5)",
        },
      },
      y: {
        ticks: {
          color: "#9ca3af",
          callback: (value) => "$" + value.toLocaleString(),
        },
        grid: {
          color: "rgba(55, 65, 81, 0.5)",
        },
      },
    },
  },
}

// Inicializar gráfico
let chart
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("priceChart")
  if (ctx) {
    chart = new Chart(ctx, chartConfig)
  }

  // Iniciar contador de atualização
  startUpdateTimer()
})

// Função para gerar nova previsão
async function generatePrediction() {
  const button = document.getElementById("predictButton")
  const buttonText = button.querySelector(".button-text")
  const buttonIcon = button.querySelector(".button-icon")

  // Estado de loading
  button.disabled = true
  button.classList.add("loading")
  buttonIcon.innerHTML = '<div class="loading-spinner"></div>'
  buttonText.textContent = "Calculando..."

  // Simular processamento
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Gerar novos valores
  const currentPrice = 68420
  const newPrediction = Math.floor(Math.random() * 20000) + 65000
  const newConfidence = Math.floor(Math.random() * 30) + 70

  const priceChange = newPrediction - currentPrice
  const priceChangePercent = ((priceChange / currentPrice) * 100).toFixed(2)

  // Atualizar interface
  document.getElementById("predictionValue").textContent = "$" + newPrediction.toLocaleString()
  document.getElementById("predictionDisplay").textContent = "$" + newPrediction.toLocaleString()
  document.getElementById("confidenceValue").textContent = newConfidence + "%"
  document.getElementById("confidencePercent").textContent = newConfidence + "%"

  // Atualizar barras de confiança
  document.getElementById("confidenceFill").style.width = newConfidence + "%"
  document.getElementById("confidenceFill2").style.width = newConfidence + "%"

  // Atualizar mudança de preço
  const changeElement = document.getElementById("predictionChange")
  const percentElement = document.getElementById("predictionPercent")
  const badgeElement = document.getElementById("predictionBadge")

  if (priceChange > 0) {
    changeElement.innerHTML =
      '<span class="trend-icon">📈</span><span class="change-percent">+' + priceChangePercent + "%</span>"
    percentElement.textContent = "+" + priceChangePercent + "% em 30 dias"
    badgeElement.textContent = "Alta"
    badgeElement.style.background = "#10b981"
  } else {
    changeElement.innerHTML =
      '<span class="trend-icon">📉</span><span class="change-percent">' + priceChangePercent + "%</span>"
    percentElement.textContent = priceChangePercent + "% em 30 dias"
    badgeElement.textContent = "Baixa"
    badgeElement.style.background = "#ef4444"
  }

  // Restaurar botão
  button.disabled = false
  button.classList.remove("loading")
  buttonIcon.textContent = "⚡"
  buttonText.textContent = "Nova Previsão"

  // Atualizar gráfico
  updateChart(newPrediction)
}

// Função para atualizar gráfico
function updateChart(newPrediction) {
  if (chart) {
    chart.data.datasets[1].data = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      68000,
      newPrediction,
      newPrediction + 3000,
      newPrediction + 7000,
    ]
    chart.update()
  }
}

// Função para mostrar tabs
function showTab(tabName) {
  // Remover classe active de todos os botões e conteúdos
  document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

  // Adicionar classe active ao botão clicado
  event.target.classList.add("active")
  document.getElementById(tabName).classList.add("active")
}

// Timer de atualização
function startUpdateTimer() {
  let totalMinutes = 135 // 2h 15m em minutos

  const updateTimer = () => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    const display = document.getElementById("nextUpdate")

    if (display) {
      display.textContent = `${hours}h ${minutes}m`
    }

    totalMinutes--
    if (totalMinutes < 0) {
      totalMinutes = 135 // Reset para 2h 15m
    }
  }

  // Atualizar imediatamente e depois a cada minuto
  updateTimer()
  setInterval(updateTimer, 60000)
}

// Simular atualizações de preço em tempo real
setInterval(() => {
  const currentPriceElement = document.getElementById("currentPrice")
  if (currentPriceElement) {
    const currentPrice = Number.parseInt(currentPriceElement.textContent.replace(/[$,]/g, ""))
    const variation = (Math.random() - 0.5) * 1000 // Variação de até $500
    const newPrice = Math.max(50000, currentPrice + variation)

    currentPriceElement.textContent = "$" + Math.floor(newPrice).toLocaleString()
  }
}, 30000) // Atualizar a cada 30 segundos
