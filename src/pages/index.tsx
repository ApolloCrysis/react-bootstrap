import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Image from 'next/image';

function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  //2waysystems.com/wp-content/uploads/2018/01/2Way-Workforce-White-e1515513589380.png

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/users');
  };

  const onFieldChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return (
    <Container
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
      }}
    >
      <Card>
        <Card.Body>
          <Card.Title className="pb-5">Login</Card.Title>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => onFieldChange(e, 'email')}
                value={formData.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => onFieldChange(e, 'pass')}
                value={formData.pass}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={handleLogin}>
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
