// import React from 'react'
import React from 'react';
// import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
        

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://instagram.com/sneha__farkya'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/sneha-farkya-288773217/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/snehafarkya'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          FunZone.com
        </a>
      </div>
    </MDBFooter>
  );
}