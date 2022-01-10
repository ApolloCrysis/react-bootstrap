import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import userData from '../../../mock/Users';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { CommonLayout } from '../../../components';

interface myUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
}

const UserDetail = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<myUser>(null);

  //Are we editing?
  const [editing, setEditing] = useState(false);

  //Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
  });
  //On component mount, or if router changes
  useEffect(() => {
    //Only do something once router is ready,
    //cz we need the [id] param from the router
    if (!!router.isReady) {
      if (!!router.query['id']) {
        const userID = parseInt(router.query['id']);
        const myUser = userData.find((item) => item.id === userID);
        setUserDetail(myUser);
      }
    }
  }, [router]);

  useEffect(() => {
    setFormData(userDetail);
  }, [userDetail]);

  const onFieldChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    alert('Saved User');
    router.push('/users/');
  };

  return (
    <CommonLayout>
      <Container>
        <Row>
          <h1>User Detail Page</h1>
        </Row>
        {!!userDetail && (
          <Row>
            <Col xs={12} md={10} lg={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={formData?.firstName || ''}
                    onChange={(e) => onFieldChange(e, 'firstName')}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={formData?.lastName || ''}
                    onChange={(e) => onFieldChange(e, 'lastName')}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserName">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="User Name"
                    value={formData?.userName || ''}
                    onChange={(e) => onFieldChange(e, 'userName')}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Admin User" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleSubmitClick}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </CommonLayout>
  );
};

export default UserDetail;
