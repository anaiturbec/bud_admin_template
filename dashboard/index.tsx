import React from 'react';
import Layout from '../../components/layout/Layout';
import { ContentLayout } from '../../components/dashboard/content';

export default function Dashboard() {
  return (
    <Layout current="content">
      <ContentLayout />
    </Layout>
  );
}
