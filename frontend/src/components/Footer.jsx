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
        <div className="col-md-5">
          <div className="row justify-content-start gap-3">
            <div className='col-auto'>
              <img src={logo} className="img-fluid footer-logo" alt=".." />
            </div>
          </div>
          <div className='mt-4 pt-2'>
            <p className='footer-text space lh-base d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
        {/* 
          <div className="col-md-5 mt-3">
            <div className="row justify-content-md-between gap-md-0 gap-sm-2 gap-5">
              <div className="col-md-auto col-sm-3 col-auto mt-lg-0 mt-2">
                <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1">MENU</p>
                <p className="footer-link mb-lg-4 mb-md-3">ROADMAP</p>
                <p className="footer-link mb-lg-4 mb-md-3">TOKENOMICS</p>
              </div>
              <div className="col-md-auto col-sm-3 col-auto mt-lg-0 mt-2">
                <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1">PRODUCTS</p>
                <p className="footer-link mb-lg-4 mb-md-3">PRODUCT 1</p>
                <p className="footer-link mb-lg-4 mb-md-3">PRODUCT 1</p>
                <p className="footer-link mb-lg-4 mb-md-3">PRODUCT 2</p>
                <p className="footer-link mb-lg-4 mb-md-3">PRODUCT 2</p>
                <p className="footer-link mb-lg-4 mb-md-3">PRODUCT 3</p>
              </div>
              <div className="col-md-auto col-sm-3 col-auto mt-lg-0 mt-2">
                <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1">COMPANY</p>
                <p className="footer-link mb-lg-4 mb-md-3">ROADMAP</p>
                <p className="footer-link mb-lg-4 mb-md-3">TOKENOMICS</p>
              </div>
            </div>
          </div> 
        */}
        <div className="col-md-5 mt-3">
          <div className="row justify-content-md-end justify-content-sm-evenly justify-content-center gap-md-5 gap-sm-2 gap-5 text-md-start">
            <div className="col-md-auto col-6">
              <div className="row mb-md-3">
                <div className="col-auto mt-lg-0 mt-2">
                  <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1">MENU</p>
                  <p className="footer-link footer-text mb-lg-4 mb-md-3">ROADMAP</p>
                  <p className="footer-link footer-text mb-lg-4 mb-md-3">TOKENOMICS</p>
                </div>
              </div>
              <div className="row mb-md-3">
                <div className="col-auto mt-lg-0 mt-2">
                  <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1">COMPANY</p>
                  <p className="footer-link footer-text mb-lg-4 mb-md-3">ROADMAP</p>
                  <p className="footer-link footer-text mb-lg-4 mb-md-3">TOKENOMICS</p>
                </div>
              </div>
            </div>
            <div className="col-md-auto col-sm-3 col-auto mt-lg-0 mt-2 text-start">
              <p className="lg-text fw-semibold mb-lg-4 mb-md-3 mb-3 mb-1 ">PRODUCTS</p>
              <p className="footer-link footer-text mb-lg-4 mb-md-3">PRODUCT 1</p>
              <p className="footer-link footer-text mb-lg-4 mb-md-3">PRODUCT 1</p>
              <p className="footer-link footer-text mb-lg-4 mb-md-3">PRODUCT 2</p>
              <p className="footer-link footer-text mb-lg-4 mb-md-3">PRODUCT 2</p>
              <p className="footer-link footer-text mb-lg-4 mb-md-3">PRODUCT 3</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row justify-content-md-between justify-content-evenly my-lg-5 my-4">
        <div className="col-md-5 col-sm-7 col-12">
          {/* <p className='lg-text fw-semibold text-md-start text-center'>Stay up to date</p> */}
          <div className="my-4 row align-items-center justify-content-md-start justify-content-center">
            <p className='lg-text fw-semibold text-md-start text-center'>Stay up to date</p>
            <div className="col-md-8 col-10">
              <div className="input-group input-group-lg mb-3">
                <input type="email" className="custom-input rounded-pill shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}
                  placeholder="Your Email" />
              </div>
            </div>
            <div className='col-md-8 col-10'>
              <div className="input-group input-group-lg">
                <input type="text" className="custom-input rounded-pill" id="name" ref={nameRef}
                  placeholder="Your Name" />
              </div>
            </div>
            <div id='subscribe' className="col-md-4 col-8 ps-lg-2 ps-sm-3 ps-1 pt-md-0 pt-3 d-none d-md-inline">
              <button type="button" className="btn button-footer btn-lg border-0 rounded-pill text-center" onClick={sendMsg}>Subscribe</button>
            </div>
            <div className="d-flex d-md-none justify-content-md-start justify-content-center">
              <div id='subscribe' className="col-10 pe-2 pt-md-0 pt-3 d-flex justify-content-sm-end justify-content-center">
                <button type="button" className="btn button-footer btn-lg border-0 rounded-pill text-center" onClick={sendMsg}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-4 col-12">
          <p className='lg-text fw-semibold mb-3 ps-xl-3 text-center text-md-end'>Our Community</p>
          <div className="row justify-content-md-end justify-content-center gap-md-3 gap-4 ms-lg-0 ps-md-2 my-3">
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
      <div className="text-start mt-4 d-flex justify-content-md-start justify-content-center">
        <p>© 2023 RDEX, All Rights Reserved</p>
      </div>
    </footer>
  )
}
