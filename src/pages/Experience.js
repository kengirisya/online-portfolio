import React from 'react';

function Experience(props) {
    return (
        <div>
            <h2>Experience</h2>
            <div className='content'>
                <div className='experience'>
                    <h3>GITHUB Campus Expert</h3>
                    <h6 className='date'>August 2018 - Present</h6>
                    <h4>GITHUB</h4>
                    <p>Responsible for building the on campus community with the support of GitHub.</p>
                </div>
                
                <div className='experience'>
                    <h3>Opensource Developer Intern</h3>
                    <h6 className='date'>August 2019 - Present</h6>
                    <h4>FOSSASIA</h4>
                    <p>Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and added new features to the eventyay platform.</p>
                </div>

                <div className='experience'>
                    <h3>Software Developer Intern</h3>
                    <h6 className='date'>December 2018 - January 2019</h6>
                    <h4>HASURA</h4>
                    <p>Worked on Hasura's GraphQL engine and added new features in it.</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;