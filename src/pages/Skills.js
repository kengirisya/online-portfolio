import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const checkCircle = <FontAwesomeIcon icon={faCheckCircle} />

function Skills(props) {
    return (
        <div>
            <h2>Skills</h2>
            <div className='content'>
                <h3>Programming Languages & Tools</h3>
                <div className='skill'>
                    <div>
                        <p>{checkCircle} HTML5</p>
                        <p>{checkCircle} Javascript</p>
                        <p>{checkCircle} Node.js</p>
                        <p>{checkCircle} Django</p>
                    </div>
                    <div>
                        <p>{checkCircle} CSS3</p>
                        <p>{checkCircle} React</p>
                        <p>{checkCircle} Python</p>
                        <p>{checkCircle} Ember</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;