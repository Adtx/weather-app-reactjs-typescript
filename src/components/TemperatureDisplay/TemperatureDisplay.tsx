import styled from "styled-components"

const StyledTemperatureDisplay = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin-top: 20%;
  text-align: center;
  width: 60%;
`
interface TemperatureDisplayProps {
  temperature: number
  unit: number
  location: string
}

const CITY_LOCALE_MAP: Record<string, string> = {
  Lisbon: "pt-PT",
  London: "en-GB",
  Madrid: "es-ES",
  Miami: "en-US",
  "New York": "en-US",
  Paris: "fr-FR",
  "Rio de Janeiro": "pt-BR",
  Sydney: "en-AU",
  Tokyo: "ja-JP",
}

const localeFormatTemperature = (
  location: string,
  temperature: number,
  options: Intl.NumberFormatOptions
) =>
  new Intl.NumberFormat(CITY_LOCALE_MAP[location], options).format(
    Math.round(temperature)
  )

export const TemperatureDisplay = ({
  temperature,
  unit,
  location,
}: TemperatureDisplayProps) => {
  const temperatureFormatOptions = {
    style: "unit",
    unit: unit ? "fahrenheit" : "celsius",
  }

  return (
    <StyledTemperatureDisplay>
      {localeFormatTemperature(location, temperature, temperatureFormatOptions)}
    </StyledTemperatureDisplay>
  )
}
