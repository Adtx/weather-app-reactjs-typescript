import { useState } from "react"
import * as S from "./styles"
import { LocationPickerProps } from "./types"
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri"

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
const OPTIONS_MENU_ICON_SIZE = "20px"

export const LocationPicker = ({
  setLocation,
  locationPickerRef,
  displayLocationsMenu,
  setDisplayLocationsMenu,
}: LocationPickerProps) => {
  const [value, setValue] = useState(LOCATIONS[0])

  const onSelectClick = () => setDisplayLocationsMenu((display) => !display)

  const onOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setValue((e.target as HTMLDivElement).textContent!)
    setDisplayLocationsMenu(false)
    setLocation((e.target as HTMLDivElement).textContent!)
  }

  return (
    <S.StyledLocationPicker ref={locationPickerRef}>
      <div onClick={onSelectClick}>
        {value}{" "}
        {displayLocationsMenu ? (
          <RiArrowDropUpFill fontSize={OPTIONS_MENU_ICON_SIZE} />
        ) : (
          <RiArrowDropDownFill fontSize={OPTIONS_MENU_ICON_SIZE} />
        )}
      </div>
      {displayLocationsMenu && (
        <S.OptionsMenu>
          {LOCATIONS.map((location, index) => (
            <div key={index} onClick={(e) => onOptionClick(e)}>
              {location}
            </div>
          ))}
        </S.OptionsMenu>
      )}
    </S.StyledLocationPicker>
  )
}
