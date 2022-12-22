import { useState } from "react"
import { OptionsMenu, StyledLocationPicker } from "./styles"
import { LocationPickerProps } from "./types"
import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri"

const LOCATIONS = ["Lisbon", "London", "New York"]
const OPTIONS_MENU_ICON_SIZE = "20px"

export const LocationPicker = ({ setLocation }: LocationPickerProps) => {
  const [value, setValue] = useState(LOCATIONS[0])
  const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false)

  const onSelectClick = () => setDisplayOptionsMenu((display) => !display)

  const onOptionClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setValue((e.target as HTMLDivElement).textContent!)
    setDisplayOptionsMenu(false)
    setLocation((e.target as HTMLDivElement).textContent!)
  }

  return (
    <StyledLocationPicker>
      <div onClick={onSelectClick}>
        {value}{" "}
        {displayOptionsMenu ? (
          <RiArrowDropUpFill fontSize={OPTIONS_MENU_ICON_SIZE} />
        ) : (
          <RiArrowDropDownFill fontSize={OPTIONS_MENU_ICON_SIZE} />
        )}
      </div>
      {displayOptionsMenu && (
        <OptionsMenu>
          {LOCATIONS.map((location, index) => (
            <div key={index} onClick={(e) => onOptionClick(e)}>
              {location}
            </div>
          ))}
        </OptionsMenu>
      )}
    </StyledLocationPicker>
  )
}
