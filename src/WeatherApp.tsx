import { useEffect, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"
import { LocationPicker } from "./components/LocationPicker/LocationPicker"
import * as U from "./components/UnitsToggle/UnitsToggle"
import { WeatherIcon } from "./components/WeatherIcon/WeatherIcon"
import { DaylightClock } from "./components/DaylightClock/DaylightClock"
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary"
import styled from "styled-components"

const Header = styled.header`
  align-items: center;
  background-color: #283137;
  display: flex;
  height: 7vh;
  justify-content: center;
  width: 100%;
`

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
`

const StyledWeatherApp = styled.main`
  align-items: center;
  background-color: #5f7786;
  box-shadow: 0 1px 6px 2px rgba(28, 33, 39, 0.1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  width: 35vw;

  @media (max-width: 1150px) {
    width: 45%;
  }

  @media (max-width: 950px) {
    width: 50%;
  }

  @media (max-width: 750px) {
    width: 65%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`

const InputArea = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
  width: 80%;
`

const Message = styled.h2`
  color: #fff;
  font-size: 3rem;
  margin-top: 25%;
  text-align: center;
  width: 60%;
`

export type displayDataType = {
  location: string
  temperature: string | null
  weatherIcon: {
    icon: string
    description: string
  }
  daylightTimes: {
    sunrise: number
    sunset: number
  }
}

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
  const [httpRequestError, setHttpRequestError] = useState(false)

  useEffect(() => {
    const loadLocationWeather = async () => {
      try {
        const weatherInfo = await fetchWeatherInfo(displayData.location)
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
        }
      } catch (error) {
        setHttpRequestError(true)
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    let requestCanceled = false
    loadLocationWeather()
    return () => {
      requestCanceled = true
      setHttpRequestError(false)
    }
  }, [displayData.location])

  const renderDataDisplayArea = () => {
    if (loading) return <Message>Loading...</Message>
    else if (httpRequestError) return <Message>HTTP request error.</Message>
    return (
      <>
        <ErrorBoundary>
          <TemperatureDisplay temperature={displayData.temperature!} />
        </ErrorBoundary>
        <ErrorBoundary>
          <WeatherIcon icon={displayData.weatherIcon} />
        </ErrorBoundary>
        <ErrorBoundary>
          <DaylightClock
            location={displayData.location}
            daylightTimes={displayData.daylightTimes}
          />
        </ErrorBoundary>
      </>
    )
  }

  return (
    <StyledWeatherApp>
      <Header>
        <Title>Weather app</Title>
      </Header>
      <InputArea>
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
      </InputArea>
      {renderDataDisplayArea()}
    </StyledWeatherApp>
  )
}
