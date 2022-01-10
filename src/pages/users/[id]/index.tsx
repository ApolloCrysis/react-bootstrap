import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import userData from '../../../mock/Users';
import { Button } from 'react-bootstrap';

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

  return (
    <>
      <h1>User Detail Page</h1>
      {!!userDetail && (
        <>
          {editing ? (
            <>
              <Button onClick={() => setEditing(false)}>Cancel</Button>
              <Button onClick={() => console.log('do save thing')}>Save</Button>
              <div>Show form here</div>
            </>
          ) : (
            <div>
              <Button onClick={() => setEditing(true)}>Edit</Button>
              <div>ID: {userDetail.id}</div>
              <div>First Name: {userDetail.firstName}</div>
              <div>Last Name: {userDetail.lastName}</div>
              <div>Username: {userDetail.userName}</div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserDetail;
