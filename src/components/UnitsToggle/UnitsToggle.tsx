import { useState } from "react"
import * as S from "./styles"
import { UnitsToggleProps } from "./types"

export enum UNITS {
  CELSIUS,
  FAHRENHEIT,
}
const NUMBER_OF_AVAILABLE_UNITS = 2

const CITY_LOCALE_MAP = {
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

export const localeFormatTemperature = (
  location: string,
  temperature: number,
  options: Intl.NumberFormatOptions
) =>
  new Intl.NumberFormat((CITY_LOCALE_MAP as any)[location], options).format(
    temperature
  )

export const UnitsToggle = ({
  location,
  loading,
  setDisplayData,
}: UnitsToggleProps) => {
  const [unit, setUnit] = useState(UNITS.CELSIUS)

  const temperatureFormatOptions = {
    style: "unit",
    unit: unit ? "celsius" : "fahrenheit",
  }

  const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (!loading) {
      setDisplayData((displayData) => {
        const temperature = parseInt(displayData.temperature!)
        return {
          ...displayData,
          temperature:
            unit === UNITS.CELSIUS
              ? localeFormatTemperature(
                  location,
                  Math.round(temperature * (9 / 5) + 32),
                  temperatureFormatOptions
                )
              : localeFormatTemperature(
                  location,
                  Math.round((temperature - 32) * (5 / 9)),
                  temperatureFormatOptions
                ),
        }
      })
      setUnit((unit) => (unit + 1) % NUMBER_OF_AVAILABLE_UNITS)
    }
  }

  return (
    <S.StyledUnitsToggle loadingData={loading}>
      <S.UnitLabel>ºC</S.UnitLabel>
      <label>
        <input type="checkbox" onClick={handleChange} disabled={loading} />
        <span />
      </label>
      <S.UnitLabel>ºF</S.UnitLabel>
    </S.StyledUnitsToggle>
  )
}
