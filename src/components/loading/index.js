import React, { memo } from "react"

import { Spin } from "antd"
import { connect } from "react-redux"
const Loading = (props) => {
  return (
    <>
      {props.show ? (
        <div className="Spin-loading">
          <Spin size="large" tip="Loading..." />
        </div>
      ) : (
        ""
      )}
    </>
  )
}

function mapStateToProps(state) {
  return state.loading
}

export default connect(mapStateToProps)(memo(Loading))
