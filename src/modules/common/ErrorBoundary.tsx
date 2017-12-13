import * as React from 'react';

// Types
interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Catch errors in any child components and re-renders with an error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render () {
        if (this.state.error) {
            return (
              <div>
                React Error
                <div className="ui-g">
                  <div className="ui-g-12">
                    Error Name:
                    {this.state.error.name}
                  </div>
                  <div className="ui-g-12">
                    Error Message:
                    {this.state.error.message}
                  </div>
                  <div className="ui-g-12">
                    Error Stack:
                    {this.state.error.stack}
                  </div>

                </div>
            </div>
            );
        }
        return this.props.children;

    }
}
