import Chart from 'chart.js/auto';

class ModulesChartsJS {
    constructor() {}

    graphicsInstance(idelement, labels, typecharts, internalLabel, backgroundColor, data) {
        try {
            const ctx = document.getElementById(idelement)?.getContext('2d');
            if (!ctx) {
                throw new Error(`Elemento com ID "${idelement}" não encontrado.`);
            }

            const chart = new Chart(ctx, {
                type: typecharts,
                data: {
                    labels: labels, 
                    datasets: [{
                        label: internalLabel, 
                        data: data, 
                        backgroundColor: backgroundColor, 
                        borderColor: backgroundColor.map(color => color.replace('0.5', '1')), 
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return chart; // Retorna a instância do gráfico
        } catch (error) {
            console.error("Erro ao instanciar os gráficos...", error);
            return null; // Retorna null em caso de erro
        }
    }
}