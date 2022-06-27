/* eslint-disable */
import React from "react";
import AuthService from "../services/auth.service";
import "./Profile.css";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>
    //       <strong>{currentUser.username}</strong> Profile
    //     </h3>
    //   </header>
    //   <p>
    //     <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
    //     {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
    //   </p>
    //   <p>
    //     <strong>Id:</strong> {currentUser.id}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {currentUser.email}
    //   </p>
    //   <strong>Authorities:</strong>
    //   <ul>
    //     {currentUser.roles &&
    //       currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
    //   </ul>
    // </div>
  <div>
      <div className="row container d-flex justify-content-center">
          <div className="card user-card-full">
            <div className="row m-l-0 m-r-0">
              <div className="col-sm-4 bg-c-lite-green user-profile">
                <div className="card-block text-center text-white">
                  <div className="m-b-25">
                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                  </div>
                  <h4 className="">{currentUser.username}</h4>
                  <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="card-block">
                  <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Email</p>
                      <h6 className="text-muted f-w-400">{currentUser.email}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Numéro de téléphone</p>
                      <h6 className="text-muted f-w-400">{currentUser.tel}</h6>
                    </div>
                  </div>
                  <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"/>
                  <div className="row">
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">CIN</p>
                      <h6 className="text-muted f-w-400">{currentUser.cin}</h6>
                    </div>
                    <div className="col-sm-6">
                      <p className="m-b-10 f-w-600">Les Authorité</p>
                      <h6 className="text-muted f-w-400">
                      {currentUser.roles &&
                         currentUser.roles.map((role, index) => <div><strong key={index}>{role}</strong><br/></div>)}
                      </h6>
                    </div>
                  </div>
                  <ul className="social-link list-unstyled m-t-40 m-b-10">
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true" /></a></li>
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true" /></a></li>
                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  



   
  );
};

export default Profile;
