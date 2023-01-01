import * as S from "./styles"
import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"
import { LocationPicker } from "./components/LocationPicker/LocationPicker"
import * as U from "./components/UnitsToggle/UnitsToggle"
import { WeatherIcon } from "./components/WeatherIcon/WeatherIcon"
import { DaylightClock } from "./DaylightClock/DaylightClock"
import { displayDataType } from "./types"
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary"

export const WeatherApp = () => {
  const [displayData, setDisplayData] = useState<displayDataType>({
    location: "Lisbon",
    temperature: null,
    weatherIcon: {
      icon: "",
      description: "",
    },
    daylightTimes: {
      sunrise: 0,
      sunset: 0,
    },
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let requestCanceled = false
    fetchWeatherInfo(displayData.location).then((weatherInfo) => {
      if (!requestCanceled) {
        const { temp, description, icon, sunrise, sunset } = weatherInfo!
        setDisplayData((displayData) => ({
          ...displayData,
          temperature: U.localeFormatTemperature(
            displayData.location,
            Math.round(temp),
            // prettier-ignore
            { style: "unit", unit: "celsius" }
          ),
          weatherIcon: { icon, description },
          daylightTimes: { sunrise, sunset },
        }))
        setLoading(false)
      }
    })
    // prettier-ignore
    return () => { requestCanceled = true }
  }, [displayData.location])

  return (
    <S.StyledWeatherApp>
      <S.Header>
        <S.Title>Weather app</S.Title>
      </S.Header>
      <S.InputArea>
        <ErrorBoundary>
          <LocationPicker setDisplayData={setDisplayData} />
        </ErrorBoundary>
        <ErrorBoundary>
          <U.UnitsToggle
            location={displayData.location}
            loading={loading}
            setDisplayData={setDisplayData}
          />
        </ErrorBoundary>
      </S.InputArea>
      {
        // prettier-ignore
        loading 
        ? 
          <S.LoadingMessage>Loading...</S.LoadingMessage>
        : 
          <>
            <ErrorBoundary>
              <TemperatureDisplay temperature={displayData.temperature!} />
            </ErrorBoundary>
            <ErrorBoundary>
              <WeatherIcon icon={displayData.weatherIcon} />
            </ErrorBoundary>
            <ErrorBoundary>
              <DaylightClock location={displayData.location} daylightTimes={displayData.daylightTimes} />
            </ErrorBoundary>
          </>
      }
    </S.StyledWeatherApp>
  )
}
