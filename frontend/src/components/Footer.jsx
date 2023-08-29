import React, { useRef } from 'react'
import logo from '../img/rdex.png'
import mail from '../img/email.png'
import telegram from '../img/telegram.png'
import twitter from '../img/twitter.png'
import database from '../FirebaseDb'
import LeftGradient from './Circular Gradients/LeftGradient'
import ax from 'axios';
import { doc, setDoc } from "firebase/firestore";

export default function Footer() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  async function sendMsg() {

    const data = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      isActive: true
    }

    try {
      await setDoc(doc(database, "subs", emailRef.current.value), data)
      console.log("Document written.");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    ax({
      method: 'post',
      url: 'https://rdex.onrender.com/sendMsg',
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value
      }
    });
  }

  return (
    <footer id="footer" className="container-fluid text-white pt-lg-5 pt-md-2 top-margin-and-padding-reach-us fade-in position-relative">
      <LeftGradient />
      <div className="container-fluid row justify-content-between mb-lg-5">
        <div className="col-lg-5">
          <div className="row justify-content-start gap-3">
            <div className='col-auto'>
              <img src={logo} className="img-fluid" alt=".." />
            </div>
            {/* <div className='col-6'>
              <h1 className="display-5 mt-2 fw-semibold">RDEX</h1>
            </div> */}
          </div>
          <div className='mt-4 pt-2'>
            <p className='footer-text space lh-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
        <div className="col-lg-5 mt-3">
          <div className="row justify-content-lg-between">
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-4 mb-1">MENU</p>
              <p className="footer-link mb-4 stats-description">ROADMAP</p>
              <p className="footer-link mb-4 stats-description">TOKENOMICS</p>
            </div>
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-4 mb-1">PRODUCTS</p>
              <p className="footer-link mb-4 stats-description">PRODUCT 1</p>
              <p className="footer-link mb-4 stats-description">PRODUCT 1</p>
              <p className="footer-link mb-4 stats-description">PRODUCT 2</p>
              <p className="footer-link mb-4 stats-description">PRODUCT 2</p>
              <p className="footer-link mb-4 stats-description">PRODUCT 3</p>
            </div>
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-4 mb-1">COMPANY</p>
              <p className="footer-link mb-4 stats-description">ROADMAP</p>
              <p className="footer-link mb-4 stats-description">TOKENOMICS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row justify-content-between my-lg-5">
        <div className="col-lg-5">
          <p className='fs-4 fw-semibold'>Stay up to date</p>
          <div className="my-4 row">
            <div className="input-group input-group-lg mb-3">
              <input type="email" className="custom-input rounded-5" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}
                placeholder="Your Email" />
            </div>
            <div className='col-8'>
              <div className="input-group input-group-lg">
                <input type="text" className="custom-input rounded-5" id="name" ref={nameRef}
                  placeholder="Your Name" />
              </div>
            </div>
            <div id='subscribe' className="col-4">
              <button type="button" className="btn button-whitepaper btn-lg border-0 rounded-pill px-lg-5 text-center">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <p className='fs-4 fw-semibold mb-3'>Our Community</p>
          <div className="row justify-content-start gap-lg-4 my-3">
            <div className="col-auto scaleUp rounded-circle footer-socials">
              <a href="#"><img src={telegram} className="footer-img" alt="" /></a>
            </div>
            <div className="col-auto scaleUp rounded-circle footer-socials">
              <a href="#"><img src={mail} className="footer-img" alt="" /></a>
            </div>
            <div className="col-auto scaleUp rounded-circle footer-socials">
              <a href="#"><img src={twitter} className="footer-img" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 footer-border"></div>
      </div>
      <div className="text-start mt-4">
        <p>© 2023 RDEX, All Rights Reserved</p>
      </div>
    </footer>
  )
}
