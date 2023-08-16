import React, { useRef } from 'react'
import logo from '../img/originalLogo.jpg'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram-logo.png'
import twitter from '../img/twitter.png'
import github from '../img/social.png'
import discord from '../img/logo.png'
import database from '../FirebaseDb'
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
      url: 'https://rdex.onrender.com',
      data: {
        name: nameRef.current.value,
        email: emailRef.current.value
      }
    });
  }

  return (
    <footer id="footer" className="container-fluid text-white pt-lg-5 pt-md-2 top-margin-and-padding-reach-us footer-border fade-in">
      <div className="container-fluid row justify-content-between mb-lg-5">
        <div className="col-lg-5 mt-4">
          <div className="row justify-content-start gap-3">
            <div className='col-2'>
              <img src={logo} className="img-fluid rounded-circle" alt=".." />
            </div>
            <div className='col-6'>
              <h1 className="display-5 mt-2 fw-semibold">RDEX</h1>
            </div>
          </div>
          <div className='mt-4 pt-2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
        <div className="col-lg-5 mt-3">
          <div className="row justify-content-lg-between">
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-3 mb-1">MENU</p>
              <p className="fw-normal mb-1 stats-description">ROADMAP</p>
              <p className="fw-normal mb-1 stats-description">TOKENOMICS</p>
            </div>
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-3 mb-1">PRODUCTS</p>
              <p className="fw-normal mb-1 stats-description">PRODUCT 1</p>
              <p className="fw-normal mb-1 stats-description">PRODUCT 1</p>
              <p className="fw-normal mb-1 stats-description">PRODUCT 2</p>
              <p className="fw-normal mb-1 stats-description">PRODUCT 2</p>
              <p className="fw-normal mb-1 stats-description">PRODUCT 3</p>
            </div>
            <div className="col-lg-auto col-sm-row mt-lg-0 mt-2">
              <p className="fs-5 fw-semibold mb-lg-3 mb-1">COMPANY</p>
              <p className="fw-normal mb-1 stats-description">ROADMAP</p>
              <p className="fw-normal mb-1 stats-description">TOKENOMICS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid row justify-content-between my-lg-5">
        <div className="col-lg-5">
          <p className='fs-2 fw-semibold'>Stay up to date</p>
          <div className="my-4 row">
            <div className="input-group input-group-lg mb-3">
              <input type="email" className="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" ref={emailRef}
                placeholder="Your Email" />
            </div>
            <div className='col-8'>
              <div className="input-group input-group-lg">
                <input type="text" className="form-control rounded-3" id="name" ref={nameRef}
                  placeholder="Your Name" />
              </div>
            </div>
            <div className="col-4">
              <button className="btn btn-lg custom" onClick={sendMsg}><strong>Subscribe</strong></button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <p className='fs-2 fw-semibold mb-3'>Our Community</p>
          <div className="row justify-content-start mb-3">
            <div className="col-auto">
              <a href="#"><img src={instagram} className="footer-img scaleUp" alt="" /></a>
            </div>
            <div className="col-auto">
              <a href="#"><img src={facebook} className="footer-img scaleUp" alt="" /></a>
            </div>
            <div className="col-auto">
              <a href="#"><img src={twitter} className="footer-img scaleUp" alt="" /></a>
            </div>
            <div className="col-auto">
              <a href="#"><img src={github} className="footer-img scaleUp" alt="" /></a>
            </div>
            <div className="col-auto">
              <a href="#"><img src={discord} className="footer-img scaleUp" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 footer-border"></div>
      </div>
      <div className="text-start mt-4 mb-1">
        <p>© 2023 RDEX all rights reserved</p>
      </div>
    </footer>
  )
}
