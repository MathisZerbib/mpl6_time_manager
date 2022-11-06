<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 intro-section">
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Bienvenue dans votre Time Manager</h1>
          </div>
        </div>
        <div class="col-6 form-section">
          <div class="login-wrapper">
            <h2 class="login-title">S'enregistrer</h2>
            <form>
              <div class="form-group">
                <input type="text" name="username" id="username" class="form-control" placeholder="Username">
              </div>
              <div class="form-group">
                <input type="email" name="email" id="email" class="form-control" placeholder="Email">
              </div>
              <div class="form-group mb-3">
                <input type="password" name="password" id="password" class="form-control mb-5" placeholder="Password">
              </div>
              <div class="d-flex justify-content-center  align-items-center mb-5">
                <input name="register" id="register" class="btn-primary login-btn" type="button" value="S'enregistrer">
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Vous avez déjà un compte ? &nbsp;<a href="/" class="text-reset">Connectez-vous ici</a></p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  
  export default {
    name: "FormRegister",
    data() {
      return {
        
  
      };
    },
  };
  </script>
  
  <style>
  
  body {
    background-color: #fff;
    font-family: 'Karla', sans-serif; 
  }
  
  .intro-section {
    background-image: url("@@/assets/img/gotham.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    display: flex;
    color: white;
  }
  
  .intro-content-wrapper {
    width: 410px;
    max-width: 100%;
    margin-top: auto;
    margin-bottom: auto; }
    .intro-content-wrapper .intro-title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 17px; }
    .intro-content-wrapper .intro-text {
      font-size: 19px;
      line-height: 1.37; }
    .intro-content-wrapper .btn-read-more {
      background-color: #fff;
      padding: 13px 30px;
      border-radius: 0;
      font-size: 16px;
      font-weight: bold;
      color: #000; }
    .intro-content-wrapper .btn-read-more:hover {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff; }
  
  
  .form-section {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center; }
    @media (max-width: 767px) {
      .form-section {
        padding: 35px; } }
  
  .login-wrapper {
    width: 300px;
    max-width: 100%; }
    @media (max-width: 575px) {
      .login-wrapper {
        width: 100%; } }
    .login-wrapper .form-control {
      border: 0;
      border-bottom: 1px solid #e7e7e7;
      border-radius: 0;
      font-size: 14px;
      font-weight: bold;
      padding: 15px 10px;
      margin-bottom: 7px; }
      .login-wrapper .form-control::-webkit-input-placeholder {
        color: #b0adad; }
      .login-wrapper .form-control::-moz-placeholder {
        color: #b0adad; }
      .login-wrapper .form-control:-ms-input-placeholder {
        color: #b0adad; }
      .login-wrapper .form-control::-ms-input-placeholder {
        color: #b0adad; }
      .login-wrapper .form-control::placeholder {
        color: #b0adad; }
  
  .login-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px; }
  
  .login-btn {
    padding: 7px 35px;
    background-color: transparent;
    border-radius: 0;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #000;
  }
  
  .login-btn:hover {
    border: 2px solid #000;
    color: #000; 
  }
  
  .forgot-password-link {
    font-size: 14px;
    color: #080808;
    text-decoration: underline; }
  
  .social-login-title {
    font-size: 15px;
    color: #919aa3;
    display: -webkit-box;
    display: flex;
    margin-bottom: 23px; }
    
  .social-login-links {
    text-align: center;
    margin-bottom: 32px; }
  
  .social-login-link img {
    width: 40px;
    height: 40px;
    -o-object-fit: contain;
       object-fit: contain; }
  
  .social-login-link + .socia-login-link {
    margin-left: 16px; }
  
  .login-wrapper-footer-text {
    font-size: 14px;
    text-align: center; }
  
  
  </style>