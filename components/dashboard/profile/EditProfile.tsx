import React from 'react';
import nProgress from 'nprogress';
import { useMutation } from '@apollo/client';
import { Button, Input } from '../common';
import { useNotify, useUser } from '../../../hooks';
import { UPDATE_USER } from '../../../graphql/mutation';

export default function EditProfile() {
  // hooks
  const [user, setUser] = useUser();
  const notify = useNotify();
  // states
  const [disabled, setDisabled] = React.useState(false);
  const [firstName, setFirstName] = React.useState(user?.firstName ?? '');
  const [lastName, setLastName] = React.useState(user?.lastName ?? '');
  const [email, setEmail] = React.useState(user?.email ?? '');
  const [isEditing, setIsEditing] = React.useState(false);
  // mutation
  const [updateUser] = useMutation(UPDATE_USER);

  // Updates User
  const onSubmit = async () => {
    try {
      nProgress.start();
      setDisabled(true);
      if (!user) {
        return;
      }
      if (!firstName || !lastName || !email) {
        notify('Debe llenar todos los campos', 'error');
        return;
      }
      const { data } = await updateUser({
        variables: {
          data: {
            firstName,
            lastName,
            email,
            _id: user?._id,
            userType: user?.userType,
            company: user?.company?._id,
          },
        },
      });
      if (data) {
        notify('Se ha actualizado el usuario con éxito', 'success');
        setUser(data?.updateUser);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-10 w-3/4">
      <p className="font-medium text-xl">Edit profile</p>
      <div className="w-full flex flex-col bg-white rounded-lg p-8 shadow-lg gap-y-8">
        <div className="w-full flex justify-center my-2">
          <p className="text-black font-bold text-2xl">Cuenta</p>
        </div>
        <div className="flex flex-row gap-x-10">
          <Input
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsEditing(true);
            }}
          />
        </div>
        {isEditing ? (
          <Button className="bg-primary-400" onClick={() => onSubmit()} disabled={disabled}>
            Actualizar datos
          </Button>
        ) : null}
      </div>
    </div>
  );
}
