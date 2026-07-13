# Bitcoin Price Predictor — Legacy Web Client

Personal and academic web client built with HTML, CSS, and JavaScript for an experimental FastAPI Bitcoin price API.

This repository preserves the original frontend as a record of the project's evolution. The current Next.js and TypeScript client is available at [`Knust06/bitcoin-predictor-web`](https://github.com/Knust06/bitcoin-predictor-web).

## Features

- Query historical prices by asset symbol and date range
- Copy historical price series returned by the API
- Send price series to the experimental prediction endpoint
- Switch between light and dark themes
- Run as a responsive static page with no build step

## Technologies

- HTML5
- CSS3
- JavaScript
- Fetch API
- External FastAPI backend

## Running locally

Open `index.html` directly in a browser or start a local static server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## API configuration

The backend URL is defined in `script.js`:

```javascript
const apiUrl = "https://bitcoinpreviewer.up.railway.app";
```

Change this value to use a different API instance. The client consumes:

- `GET /get-prices`
- `POST /predict-bitcoin`

## Project scope

This is a personal and academic project. It is retained as the legacy implementation and is not production software. Professional source code is maintained in private Azure Repos and is not published here.

## Financial disclaimer

The model and its predictions are experimental and do not constitute financial advice. Cryptocurrency markets are volatile, and simulated or past results do not guarantee future performance.

## Author

[Lucas Knust](https://www.linkedin.com/in/lucas-knust/)
