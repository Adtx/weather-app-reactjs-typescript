import "./index.css"
import { WeatherApp } from "./WeatherApp"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <StrictMode>
    <WeatherApp />
  </StrictMode>
)
