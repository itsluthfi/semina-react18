import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
  const token = localStorage.getItem('token');

  if (!token) return <Navigate to="/signin" replace={true} />;

  return <div>Dashboard</div>;
}
