# Bitcoin Price Predictor — Legacy Web Client

Cliente web estático criado como primeira interface para a API experimental de preços e previsão de Bitcoin desenvolvida durante um projeto acadêmico da FIAP.

> Esta é a versão legada em HTML, CSS e JavaScript. A versão mais recente da interface está no repositório [`novo_bitcoin_site`](https://github.com/Knust06/novo_bitcoin_site).

## Funcionalidades

- consulta de preços históricos por símbolo e intervalo de datas;
- cópia dos preços retornados pela API;
- envio de uma série de preços para o endpoint de previsão;
- alternância entre tema claro e escuro;
- interface responsiva sem etapa de build.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Fetch API
- FastAPI no backend externo

## Executando localmente

Você pode abrir `index.html` diretamente ou iniciar um servidor estático:

```bash
python -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

## Configuração da API

A URL do backend está definida em `script.js`:

```javascript
const apiUrl = "https://bitcoinpreviewer.up.railway.app";
```

Altere esse valor para apontar para outra instância da API. O cliente utiliza principalmente:

- `GET /get-prices`
- `POST /predict-bitcoin`

## Status

Protótipo pessoal e acadêmico mantido como referência da primeira implementação. Para evoluções de interface, use a versão em Next.js e TypeScript.

## Aviso

O modelo e as previsões são experimentais e não constituem recomendação financeira. Mercados de criptoativos são voláteis, e resultados passados ou simulados não garantem desempenho futuro.

## Autor

[Lucas Knust](https://www.linkedin.com/in/lucas-knust/)
