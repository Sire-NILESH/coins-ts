import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallbackComponent?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallbackComponent ? (
        this.props.fallbackComponent
      ) : (
        <h1>Something went wrong.</h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
