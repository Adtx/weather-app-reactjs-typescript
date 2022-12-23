import * as S from "./styles"
import { useEffect, useRef, useState } from "react"
import { fetchWeatherInfo } from "./apiUtils"
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay"
import { LocationPicker } from "./components/LocationPicker/LocationPicker"
import { UNITS, UnitsToggle } from "./components/UnitsToggle/UnitsToggle"
import { WeatherIcon } from "./components/WeatherIcon/WeatherIcon"
import { DaylightClock } from "./DaylightClock/DaylightClock"

export const WeatherApp = () => {
  const [temperature, setTemperature] = useState<string | null>(null)
  const [unit, setUnit] = useState(0)
  const [location, setLocation] = useState("Lisbon")
  const [weatherIcon, setWeatherIcon] = useState({ icon: "", description: "" })
  const [daylightTimes, setDaylightTimes] = useState({ sunrise: 0, sunset: 0 })
  const [openLocationPicker, setOpenLocationPicker] = useState(false)

  const locationPickerRef = useRef(null)

  useEffect(() => {
    fetchWeatherInfo(location, unit).then((weatherInfo) => {
      const { temp, description, icon, sunrise, sunset } = weatherInfo!
      setTemperature(
        temp.toFixed() + " " + (unit === UNITS.CELSIUS ? "ºC" : "ºF")
      )
      setWeatherIcon({ icon, description })
      setDaylightTimes({ sunrise, sunset })
    })
  }, [location, unit])

  const closeLocationPicker = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (
      locationPickerRef.current &&
      !(locationPickerRef.current as HTMLDivElement).contains(
        e.target as HTMLElement
      )
    )
      setOpenLocationPicker(false)
  }

  const locationPickerProps = {
    setLocation,
    locationPickerRef,
    displayLocationsMenu: openLocationPicker,
    setDisplayLocationsMenu: setOpenLocationPicker,
  }

  return (
    <S.StyledWeatherApp onClick={closeLocationPicker}>
      <S.Header>
        <S.Title>Weather app</S.Title>
      </S.Header>
      <S.InputArea>
        <LocationPicker {...locationPickerProps} />
        <UnitsToggle setUnit={setUnit} />
      </S.InputArea>
      <TemperatureDisplay temperature={temperature!} />
      <WeatherIcon icon={weatherIcon} />
      <DaylightClock daylightTimes={daylightTimes} />
    </S.StyledWeatherApp>
  )
}
