import React from 'react'
import {Form, Button} from 'react-bootstrap'
export default function Formm() {
  return (
    <div>
         <Form>
        <Form.Group controlId="form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={5} cols={50} />
        </Form.Group>
      <br></br>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}
