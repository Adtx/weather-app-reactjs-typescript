import "./index.css"
import { WeatherApp } from "./WeatherApp"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { ErrorBoundary } from "./components/ErrorBoundary"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <StrictMode>
    <ErrorBoundary>
      <WeatherApp />
    </ErrorBoundary>
  </StrictMode>
)
