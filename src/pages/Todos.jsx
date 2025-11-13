import { Form, Table, Badge, Button, Modal } from "react-bootstrap";

import { useEffect, useRef, useState } from "react";
import { fetchTodos } from "../data/todos";
import './Todos.css'

const Todos = () => {

    const newIdRef = useRef()
    const newTitleRef = useRef()

    // const todos = fetchTodos();
    const [todosRaw, setTodosRaw] = useState([])
    const [todos, setTodos] = useState([])
    const [onlywaiting, setOnlyWaiting] = useState(false)
    const [itemPerPage, setItemPerPage] = useState(5)
    const [numPages, setNumPages] = useState(3)
    const [curPages, setCurPages] = useState(1)

    useEffect(() => {
        setTodosRaw(fetchTodos())
    }, [])


    useEffect(() => {
        if (onlywaiting)
            setTodos(todosRaw.filter((todo) =>
                !todo.completed
            ))
        else
            setTodos(todosRaw)
    }, [todosRaw, onlywaiting])

    useEffect(() => {
        setNumPages(Math.ceil(todos.length / itemPerPage))
    }, [todos, itemPerPage])

    useEffect(() => {
        if (numPages <= 0) setCurPages(0)
        else {
            if (curPages > numPages) setCurPages(numPages)
            else if (curPages <= 0) setCurPages(1)
        }
    }, [numPages])

    const waitingClicked = (id) => {
        console.log(id);
        const foundTodo = todos.find((todo) => {
            return todo.id === id
        })

        foundTodo.completed = true

        setTodosRaw([...todosRaw])
    }

    const deleteClicked = (id) => {
        setTodosRaw(todosRaw.filter((todo) => todo.id !== id))
    }

    // handle modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const saveClicked = (id, title) => {
        console.log(id, title);
        if (title.trim() !== "") {
            setTodosRaw([...todosRaw, {"userId": 1,
                id,
                title,
                "completed": false}])
        }

        newIdRef.current.value = ""
        newTitleRef.current.value = ""
        handleClose()
    }

    return (
        <div className="todos-container">
            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add todo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID:</Form.Label>
                            <Form.Control
                                value={todosRaw.reduce((prev, todo) => todo.id > prev ? todo.id : prev, -1) + 1}
                                disabled={true}
                                ref={newIdRef}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                placeholder="New todo here"
                                autoFocus
                                ref={newTitleRef} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => saveClicked(Number(newIdRef.current.value),newTitleRef.current.value)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*filters*/}
            <Form>
                <div className="d-flex justify-content-between align-items-center"  >
                    <div className=" d-flex align-items-center" >
                        <Form.Check type="switch" id="custom-switch" onChange={(e) => setOnlyWaiting(e.target.checked)} />Show only waiting&nbsp;<Button variant="warning">waiting&nbsp;<i class="bi bi-clock"></i></Button></div>
                    <Form.Select aria-label="Select items per page" className="w-25" value={itemPerPage} onChange={(e) => setItemPerPage(Number(e.target.value))}>
                        <option value={5}>5 items per page</option>
                        <option value={10}>10 items per page</option>
                        <option value={50}>50 items per page</option>
                        <option value={100}>100 items per page</option>
                    </Form.Select>
                </div>
            </Form>

            {/* table */}
            <div>
                <Table striped bordered hover>
                    <thead className="table-dark">
                        <tr>
                            <th className=" text-center" style={{ width: '3rem' }}>ID</th>
                            <th className=" text-center">Title</th>
                            <th className=" text-end" style={{ width: '12rem' }}>Completed&nbsp;<button className="btn btn-primary" onClick={() => handleShow()}>
                                <i className="bi bi-plus-lg"></i>
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.filter((todo, index) => {
                                return index >= (curPages - 1) * itemPerPage && index <= curPages * itemPerPage - 1
                            })
                                .map((todo) => {
                                    return (
                                        <tr>
                                            <td className=" text-center"><h5><Badge bg="secondary">{todo.id}</Badge></h5></td>
                                            <td>{todo.title}</td>
                                            <td className=" text-end">
                                                {todo.completed ? (
                                                    <Badge bg="success" className=" fs-6">done</Badge>
                                                ) : (
                                                    <Button variant="warning" onClick={() => waitingClicked(todo.id)}>Waiting&nbsp;<i class="bi bi-clock"></i></Button>
                                                )}
                                                &nbsp;
                                                <Button variant="danger" onClick={() => deleteClicked(todo.id)}><i class="bi bi-trash"></i></Button>
                                            </td>
                                        </tr>
                                    )
                                })}

                    </tbody>
                </Table>
            </div>

            {/* page control */}
            <div className=" text-center">
                <Button variant="outline-primary" onClick={() => setCurPages(1)} disabled={curPages === 1}>First</Button>&nbsp;
                <Button variant="outline-primary" onClick={() => curPages > 1 && setCurPages((p) => p - 1)}>Previous</Button>&nbsp;
                <span>{curPages}&nbsp;/&nbsp;{numPages}</span>&nbsp;
                <Button variant="outline-primary" onClick={() => curPages < numPages && setCurPages((p) => p + 1)}>Next</Button>&nbsp;
                <Button variant="outline-primary" onClick={() => setCurPages(numPages)} disabled={curPages === numPages}>Last</Button>
            </div>
        </div>);
}

export default Todos;