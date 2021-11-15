import React, { useState, useEffect, useRef, memo } from "react"
import { connect } from "react-redux"
import actionCreators from "../../store/actionCreators/home"
import Modal from "../../components/Modal"
import "./index.css"
import { message } from "antd"

const Home = memo(function (props) {
  const input = useRef()
  const [show, setShow] = useState(false)
  const [item, setItem] = useState({})
  const [title, setTitle] = useState("")

  useEffect(() => {
    props.getHomeData({ _start: 0, _limit: 20 })
  }, [])

  const search = () => {
    props.getHomeDataById(input.current.value)
  }

  const clear = () => {
    input.current.value = ""
    props.getHomeData({ _start: 0, _limit: 20 })
  }

  const add = () => {
    showModal()
    setTitle("Add")
  }

  const showModal = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  const editItem = (items) => {
    showModal()
    setItem({ ...item, ...items })
    setTitle("Edit")
  }

  const deleteItem = async (id) => {
    props.delHomeData(id).then((res) => {
      clear()
      message.success(`id:${id}, deleted `)
    })
  }

  return (
    <div>
      <Modal show={show} hideModal={hideModal} item={item} title={title} resetItem={clear} />
      <div>
        <input ref={input} className="search-input" type="text" placeholder="search by id" />
        &nbsp;{" "}
        <button type="button" className="btn btn-dark" onClick={search}>
          Search
        </button>
        &nbsp;{" "}
        <button type="button" className="btn btn-dark" onClick={clear}>
          Clear search
        </button>
        &nbsp;
        <button type="button" className="btn btn-dark" onClick={add}>
          Add post
        </button>
        &nbsp;
      </div>
      <div className="table-responsive fixed-header">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" style={{ width: "10%" }}>
                User ID
              </th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((item, index) => {
              return (
                <tr scope="row" key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <a>{item.userId}</a>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      editItem(item)
                    }}>
                    Edit
                  </td>
                  <td>
                    <a
                      className="more"
                      onClick={() => {
                        deleteItem(item.id)
                      }}>
                      Delete
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
})

function mapStateToProps(state) {
  return state.home
}

export default connect(mapStateToProps, actionCreators)(Home)
