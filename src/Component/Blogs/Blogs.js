import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
           <div className='blog'>
        <h2>What other services does firebase provide other than authentication?</h2>
            <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it(Cloud Messaging,Dynamic Links,Predictions,Google Analytics,Remote Config).Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests.This service was called google URL shortener in the past, but now it is renamed as Dynamic Links. In addition to their name, a couple of new features have been added to this service by Firebase Team.Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.</p>
           </div>
           <div className='blog'>
           <h2>why are you using firebase? What other options do you have to implement authentication?</h2>
           <p>Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you.Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.<br></br>Alternative Authentications,
           <li>MongoDB</li>
           <li>Auth0</li>
           <li>Okta</li>
           <li>Json Web Token</li>
           <li>Keycloak</li>

           </p>
           </div>
           <div className='blog'>
           <h2>Difference between Authorization and Authentication?</h2>
            <p>
                <p><span className='span-p'>Authorization</span> <br></br> Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>

                <p><span className='span-p'>Authentication</span> <br></br>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>

            </p>
           </div>
        </div>
    );
};

export default Blogs;