import { displayDataType } from "../../types"

export interface UnitsToggleProps {
  location: string
  loading: boolean
  setDisplayData: React.Dispatch<React.SetStateAction<displayDataType>>
}

export interface StyledUnitsToggleProps {
  loadingData: boolean
}
