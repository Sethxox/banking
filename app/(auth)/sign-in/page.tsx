import AutthForm from '@/components/AutthForm';
import React from 'react';

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AutthForm type='sign-in' />
    </section>
  );
};

export default SignIn;