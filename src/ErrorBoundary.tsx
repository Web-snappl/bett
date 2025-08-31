import React from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean; err?: any };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, err: undefined };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, err: error };
  }

  componentDidCatch(error: any, info: any) {
    console.error('APP_CRASH', { error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <pre style={{ whiteSpace: 'pre-wrap', padding: 16 }}>
          {String(this.state.err?.message || this.state.err || 'App crashed')}
        </pre>
      );
    }
    return this.props.children;
  }
}
