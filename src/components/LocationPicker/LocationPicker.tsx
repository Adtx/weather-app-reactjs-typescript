import * as S from "./styles"
import { LocationPickerProps } from "./types"

const LOCATIONS = [
  "Lisbon",
  "London",
  "Madrid",
  "Miami",
  "New York",
  "Paris",
  "Rio de Janeiro",
  "Sydney",
  "Tokyo",
]

export const LocationPicker = ({ setDisplayData }: LocationPickerProps) => {
  const handleLocationSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayData((displayData) => ({
      ...displayData,
      location: e.target.value,
    }))
  }

  return (
    <S.StyledLocationPicker onChange={handleLocationSelection}>
      {LOCATIONS.map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </S.StyledLocationPicker>
  )
}
