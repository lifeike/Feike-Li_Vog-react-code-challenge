import React from "react"
import "./index.css"
export default function Tab(props) {
  return (
    <>
      <div className="btn-group btn-group-toggle link-style" data-toggle="buttons">
        <label
          className={`btn btn-secondary Tab-button ${props.history.location.pathname === "/home" ? "active" : ""}`}
          onClick={() => {
            props.history.push("/home")
          }}>
          <input type="radio" name="options" id="option1" autoComplete="off" /> Home
        </label>
        <label
          className={`btn btn-secondary Tab-button ${props.history.location.pathname === "/universities" ? "active" : ""}`}
          onClick={() => {
            props.history.push("/universities")
          }}>
          <input type="radio" name="options" id="option2" autoComplete="off" /> Universities
        </label>
        <label
          className={`btn btn-secondary Tab-button ${props.history.location.pathname === "/postalLookup" ? "active" : ""}`}
          onClick={() => {
            props.history.push("/postalLookup")
          }}>
          <input type="radio" name="options" id="option3" autoComplete="off" /> Postal Lookup
        </label>
      </div>
    </>
  )
}
