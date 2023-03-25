import React from 'react';
import  Link  from 'next/link';

const page = () => {
  return (
    <div>
      
        <Link href="/login"> go to login page </Link>

        <Link href="/badhon">check in protected route</Link>
     
    </div>
  );
};

export default page;