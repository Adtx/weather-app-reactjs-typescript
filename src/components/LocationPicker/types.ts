export interface LocationPickerProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>
  locationPickerRef: React.MutableRefObject<any>
  displayLocationsMenu: boolean
  setDisplayLocationsMenu: React.Dispatch<React.SetStateAction<boolean>>
}
