import { displayDataType } from "../../types"

export interface LocationPickerProps {
  setDisplayData: React.Dispatch<React.SetStateAction<displayDataType>>
  locationPickerRef: React.MutableRefObject<any>
  displayLocationsMenu: boolean
  setDisplayLocationsMenu: React.Dispatch<React.SetStateAction<boolean>>
}
