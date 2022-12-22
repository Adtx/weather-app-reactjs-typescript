import { StyledDaylightClock } from "./styles"
import { DaylightClockProps } from "./types"

const unixTimestampTo24hTime = (timestamp: number) =>
  new Date(timestamp * 1000).toString().slice(16, 21)

export const DaylightClock = ({
  daylightTimes: { sunrise, sunset },
}: DaylightClockProps) => {
  return (
    <StyledDaylightClock>
      <p>{"Sunrise: " + unixTimestampTo24hTime(sunrise)}</p>
      <p>{"Sunset: " + unixTimestampTo24hTime(sunset)}</p>
    </StyledDaylightClock>
  )
}
