import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Container, Table } from 'react-bootstrap';
import userData from '../../mock/Users';

const UserList = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('This is an effect');
  }, []);

  const onItemClick = (item) => {
    router.push({
      pathname: `/users/${item.id}`,
    });
  };

  return (
    <Container fluid>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {!!userData &&
            userData.length > 0 &&
            userData.map((item, index) => (
              <tr
                key={`user-item-${index}`}
                onClick={() => onItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.userName}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserList;
