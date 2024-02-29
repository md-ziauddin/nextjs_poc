import React from 'react';
import { redirect } from 'next/navigation';
import axiosApi from '@/app/_utils/apiConfig/axiosConfig';

const checkRouteIsProtected = async () => {
  const res = await axiosApi.get('/protectedroute');

  return res;
};

const protectedRoute = async () => {
  try {
    const { data } = await checkRouteIsProtected();

    return (
      <>
        <div>protectedRoute</div>
      </>
    );
  } catch (err) {
    console.log(`Route is protected, redirecting to root page`);
    redirect('/');
  }
};

export default protectedRoute;
