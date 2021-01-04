import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const award = <FontAwesomeIcon icon={faAward} />

function Awards(props) {
    return (
        <div>
            <h2>Awards & Certifications</h2>
            <div className='content award'>
                <ul>
                    <li>{award} Hack 36 3rd prize winner.</li>
                    <li>{award} Mentor OpenCode '19</li>
                    <li>{award} Started North Indonesia First Student Design and Developer Conference.</li>
                </ul>
            </div>
        </div>
    );
}

export default Awards;