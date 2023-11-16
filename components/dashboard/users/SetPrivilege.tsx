import React from 'react';
import nProgress from 'nprogress';
import { Select } from '../common';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../graphql/mutation';
import { useNotify } from '../../../hooks';

interface SetPrivilegeProps {
  id: string;
  value: string;
}

export default function SetPrivilege({ id, value }: SetPrivilegeProps) {
  const [role, setRole] = React.useState(value);
  const [updateUser] = useMutation(UPDATE_USER);
  const notify = useNotify();

  const onChange = async () => {
    try {
      nProgress.start();
      const { data } = await updateUser({
        variables: {
          data: {
            _id: id,
            userType: role,
          },
        },
      });
      if (data) {
        notify('Se ha cambiado el tipo de usuario con éxito', 'success');
      }
    } catch (err) {
      console.log(err);
    } finally {
      nProgress.done();
    }
  };
  return (
    <Select
      className="w-40"
      value={role}
      onChange={(e) => {
        setRole(e.target.value);
        onChange();
      }}
    >
      <option value="member">Miembro</option>
      <option value="entrepreneur">Actor</option>
      <option value="superadmin">Admin</option>
    </Select>
  );
}
