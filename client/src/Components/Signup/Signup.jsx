import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function Signup() {
  return (
    <MDBContainer className="my-5 main">

      <MDBCard>
        <MDBRow className='g-0 body'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700' alt="login form" className='p-5 img-fluid' style={{objectFit:"cover", height:"600px"}}/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
                {/* <MDBIcon fas icon="hashtag  fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                <MDBIcon fas icon="fa-doutone fa-hashtag fa-3x me-3" style={{ color: '#ff6219' }}/>

                <span className="h1 fw-bold mb-0">HashTag</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="lg" value={"aflah"}/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={"aflah@gmail.com"}/>
                <MDBInput wrapperClass='mb-4' label='mobile' id='formControlLg' type='number' size="lg" value={"9999999999"}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={"123"}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'><Link to = '/login'>Login</Link> </MDBBtn>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="#!" style={{color: '#393f81'}}><Link to = '/login'>Login here</Link> </a></p>


            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;