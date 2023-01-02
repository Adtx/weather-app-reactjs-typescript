import styled from "styled-components"

const StyledTemperatureDisplay = styled.h1`
  color: #fff;
  font-size: 5rem;
  margin-top: 20%;
  text-align: center;
  width: 60%;
`
interface TemperatureDisplayProps {
  temperature: string
}

export const TemperatureDisplay = ({
  temperature,
}: TemperatureDisplayProps) => {
  return <StyledTemperatureDisplay>{temperature}</StyledTemperatureDisplay>
}
