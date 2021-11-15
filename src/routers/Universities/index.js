import React, { memo, useEffect } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/actionCreators/universities"
import { Select } from "antd"
const { Option } = Select
import "./index.css"

function Universities(props) {
  useEffect(() => {
    props.getCountries().then((res) => {
      props.getUniversities(res[0])
    })
  }, [])

  const selectCountry = (value) => {
    props.getUniversities(value)
  }

  return (
    <div>
      <div>
        {props.countryList.length > 0 ? (
          <Select className="country-select" defaultValue={props.countryList[0]} onChange={selectCountry}>
            {props.countryList.map((item, index) => {
              return (
                <Option value={item} key={index}>
                  {item}
                </Option>
              )
            })}
          </Select>
        ) : (
          ""
        )}
      </div>
      <div className="table-responsive fixed-header">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Website</th>
              <th scope="col">Country</th>
              <th scope="col">Domain</th>
            </tr>
          </thead>
          <tbody>
            {props.universitiesList.map((item, index) => {
              return (
                <tr scope="row" key={index}>
                  <td>{item.name}</td>
                  <td>
                    {item.web_pages.map((items, i) => {
                      return (
                        <div key={i}>
                          <a target="_blank" href={items}>
                            {items}
                          </a>
                          <br />
                        </div>
                      )
                    })}
                  </td>
                  <td>{item.country}</td>
                  <td>
                    {item.domains.map((item, index) => {
                      return (
                        <div key={index}>
                          <span>{item}</span>
                        </div>
                      )
                    })}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
function mapStateToProps(state) {
  return state.universities
}
export default connect(mapStateToProps, actionCreators)(memo(Universities))
