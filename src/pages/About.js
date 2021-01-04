import React from 'react';

function About(props) {
    return (
        <div>
            <h1>Ken <span className='orange'>Girisya</span></h1>
            <h4>+6281223123428 <span className='orange'>kengirisya86@gmail.com</span></h4>
            
            <div className='content'>
                <p>I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publiclab and many other projects. My tech stack includes Python and javascript. Python for server side and scripting and Javascript for the frontend. I use Django framework for the server side development and React for the frontend development. I have also worked with GraphQL. I am a Github Campus Expert at my institute where I am responsible for building on campus community. I am the lead organiser of Hack in the North Hackathon and the cofounder of Pragma Conference held at IIIT Allahabad.</p>
            </div>
        </div>
    );
}

export default About;