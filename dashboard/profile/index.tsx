import React from 'react';
import { EditProfile } from '../../../components/dashboard/profile';
import { Layout } from '../../../components/layout';

export default function ProfilePage() {
  return (
    <Layout current="profile">
      <div className="flex justify-center mt-40">
        <EditProfile />
      </div>
    </Layout>
  );
}
