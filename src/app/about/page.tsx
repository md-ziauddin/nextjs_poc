import React from 'react';

import axiosApi from '../_utils/apiConfig/axiosConfig';

const getTodo = async () => {
  try {
    const response = await axiosApi.get('/test');

    return response;
  } catch (err: any) {
    console.log(err.message);
  }
};

const About = async () => {
  const todo = await getTodo();
  console.log({ todoRoot: todo?.data });

  return <div>About</div>;
};

export default About;
