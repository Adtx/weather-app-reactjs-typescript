import { StyledDaylightClock } from "./styles"
import { DaylightClockProps } from "./types"

const CITY_LOCALE_TIMEZONE_MAP = {
  Lisbon: {
    locale: "pt-PT",
    timezone: "Europe/Lisbon",
  },
  London: {
    locale: "en-GB",
    timezone: "Europe/London",
  },
  Madrid: {
    locale: "es-ES",
    timezone: "Europe/Madrid",
  },
  Miami: {
    locale: "en-US",
    timezone: "America/New_York",
  },
  "New York": {
    locale: "en-US",
    timezone: "America/New_York",
  },
  Paris: {
    locale: "fr-FR",
    timezone: "Europe/Paris",
  },
  "Rio de Janeiro": {
    locale: "pt-BR",
    timezone: "America/Sao_Paulo",
  },
  Sydney: {
    locale: "en-AU",
    timezone: "Australia/Sydney",
  },
  Tokyo: {
    locale: "ja-JP",
    timezone: "Asia/Tokyo",
  },
}

export const DaylightClock = ({
  location,
  daylightTimes: { sunrise, sunset },
}: DaylightClockProps) => {
  const unixTimestampToCityLocalTime = (timestamp: number) => {
    const numericFormat = "2-digit" as const
    const options = {
      hour: numericFormat,
      minute: numericFormat,
      timeZone: (CITY_LOCALE_TIMEZONE_MAP as any)[location].timezone as string,
    }
    return `${new Intl.DateTimeFormat(
      (CITY_LOCALE_TIMEZONE_MAP as any)[location].locale,
      options
    ).format(new Date(timestamp * 1000))}`
  }

  return (
    <StyledDaylightClock>
      <p>{"Sunrise: " + unixTimestampToCityLocalTime(sunrise)}</p>
      <p>{"Sunset: " + unixTimestampToCityLocalTime(sunset)}</p>
    </StyledDaylightClock>
  )
}
