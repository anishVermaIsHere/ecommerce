import React, { Component } from "react";
import { BiError } from "react-icons/bi";
import { RxReload } from "react-icons/rx";
import AppConfig from "../../config/app.config";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //
  }
  render() {
    return this.state.hasError ? (
      <div>
        <div className="d-flex align-items-center justify-content-center flex-column min-vh-100 p-5 text-center">
          <BiError className="text-danger" style={{ fontSize: "5rem" }} />
          <h3 className="text-center">Something went wrong...</h3>
          <button
            className="d-flex align-items-center mt-5 px-4 btn bg-grndrk"
            onClick={() => window.location.reload(true)}
          >
            <RxReload className="mr-2"/>
            Reload
          </button>
          <div style={{ fontSize: "1.2rem", marginTop: "3rem" }}>{AppConfig.appName}</div>
        </div>
      </div>
    ) : (
      this.props.children
    );
  }
}
