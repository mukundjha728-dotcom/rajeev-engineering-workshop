import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#081225] flex flex-col items-center justify-center pt-24 px-4 text-center font-sans text-white">
          <h1 className="text-6xl font-black text-white mb-4">Oops!</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-xl">
            Something went wrong while loading this page. 
          </p>
          <div className="bg-[#111827] p-4 rounded text-left mb-8 max-w-2xl overflow-auto border border-red-500/30">
            <code className="text-sm text-red-400">{this.state.error?.toString()}</code>
          </div>
          <Link to="/" onClick={() => this.setState({ hasError: false })} className="bg-[#D4AF37] text-[#081225] px-8 py-3 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-colors">
            Return Home
          </Link>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
