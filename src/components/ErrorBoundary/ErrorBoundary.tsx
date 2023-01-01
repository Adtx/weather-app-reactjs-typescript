import React, { ReactNode, ErrorInfo } from "react"
import styled from "styled-components"

const ErrorMessageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 35%;
`

const ErrorMessage = styled.h2`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`
interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    return this.state.error ? (
      <ErrorMessageContainer>
        <ErrorMessage>Something went wrong!</ErrorMessage>
      </ErrorMessageContainer>
    ) : (
      this.props.children
    )
  }
}
