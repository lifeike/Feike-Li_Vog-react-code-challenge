import React, { useState, useEffect, useRef, memo } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/actionCreators/postalLookup"
import "./index.css"

function PostalLookup(props) {
  let input = useRef()

  const searchByZipCode = () => {
    props.getPostal(input.current.value)
  }
  console.log(props.postalLookup)

  return (
    <div>
      <div>
        <input ref={input} className="search-input" type="text" placeholder="search by zip code" />
        &nbsp;{" "}
        <button type="button" className="btn btn-dark" onClick={searchByZipCode}>
          Search
        </button>
      </div>
      <div className="table-responsive fixed-header">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">Postal Code</th>
              <th scope="col">Country</th>
              <th scope="col">State</th>
              <th scope="col">Place Name</th>
            </tr>
          </thead>
          <tbody>
            {props.postalLookup ? (
              <tr>
                <td>{props.postalLookup["post code"]}</td>
                <td>{`${props.postalLookup["country"]}(${props.postalLookup["country abbreviation"]})`}</td>
                <td>{`${props.postalLookup.places[0]["state"]}(${props.postalLookup.places[0]["state abbreviation"]})`}</td>
                <td>{props.postalLookup.places[0]["place name"]}</td>
              </tr>
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return state.postalLookup
}

export default connect(mapStateToProps, actionCreators)(memo(PostalLookup))
