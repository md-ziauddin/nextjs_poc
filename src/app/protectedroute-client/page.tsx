'use client';

import React, { useLayoutEffect } from 'react';
import axiosApi from '../_utils/apiConfig/axiosConfig';
import { redirect, useRouter } from 'next/navigation';

const ProtectedRouteClient = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    const checkRouteIsProtected = async () => {
      try {
        const res = await axiosApi.get('/protectedroute', {
          headers: {
            protected: true,
          },
        });
      } catch (err) {
        console.log(`Route is protected, redirecting to root page`);
        router.push('/');
      }
    };
    checkRouteIsProtected();
  }, []);

  return <div>ProtectedRouteClient</div>;
};

export default ProtectedRouteClient;
