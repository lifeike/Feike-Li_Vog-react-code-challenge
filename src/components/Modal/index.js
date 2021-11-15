import React, { useEffect, useRef, memo } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/actionCreators/home"
import { message } from "antd"

function mapStateToProps(state) {
  return state.home
}

export default connect(
  mapStateToProps,
  actionCreators
)(
  memo(function AddPost(props) {
    const title = useRef()
    const body = useRef()
    const userId = useRef()

    useEffect(() => {
      title.current.value = props.item.title || ""
      body.current.value = props.item.body || ""
      userId.current.value = props.item.userId || ""
    }, [props.item])

    const submitItem = async () => {
      let obj = {
        title: title.current.value,
        body: body.current.value,
        userId: userId.current.value,
      }

      if (props.title === "Add") {
        props.addHomeData(obj).then((res) => {
          props.hideModal()
          clearItem()
          props.resetItem()
          message.success(`Added successfully, new id is ${res.id}`)
        })
      } else {
        props.editHomeData(props.item.id, obj).then((res) => {
          props.hideModal()
          clearItem()
          props.resetItem()
          message.success(`Edited successfully`)
        })
      }
    }

    const clearItem = () => {
      title.current.value = ""
      body.current.value = ""
      userId.current.value = ""
    }

    return (
      <>
        <div className="modal" style={{ display: props.show ? "block" : "none" }} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.title}
                </h5>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Title</label>
                  <input ref={title} type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                  <label>Body</label>
                  <input ref={body} type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>User ID</label>
                  <input ref={userId} type="text" className="form-control" />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => {
                    props.hideModal()
                    clearItem()
                  }}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={submitItem}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
)
