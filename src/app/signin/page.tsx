// mark as client component
'use client';

// importing necessary functions
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';
import axiosApi, { interceptorFunc } from '../_utils/apiConfig/axiosConfig';

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession();

  useEffect(() => {
    const ApiCall = async () => {
      interceptorFunc();
      console.log('UseEffect');
      try {
        const response = await axiosApi.get('/test');
        console.log({ response });
      } catch (err: any) {
        console.log(err.message);
      }
    };

    ApiCall();
  }, []);

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-44 h-44 relative mb-4'>
          <Image
            src={session.user?.image as string}
            // fill
            width={80}
            height={80}
            alt=''
            className='object-cover rounded-full'
            // style={{ width: "80px", height: "80px" }}
          />
        </div>
        <p className='text-2xl mb-2'>
          Welcome <span className='font-bold'>{session.user?.name}</span>. Signed In As
        </p>
        <p className='font-bold mb-4'>{session.user?.email}</p>
        <button className='bg-red-600 py-2 px-6 rounded-md' onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  // rendering components for not logged in users
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <p className='text-2xl mb-2'>Not Signed In</p>
      <button className='bg-blue-600 py-2 px-6 rounded-md mb-2' onClick={() => signIn('google')}>
        Sign in with google
      </button>
      <button
        className='bg-none border-gray-300 border py-2 px-6 rounded-md mb-2'
        onClick={() => signIn('github')}
      >
        Sign in with github
      </button>
    </div>
  );
}
