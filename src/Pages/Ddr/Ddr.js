import React from 'react';
import Recruiter from '../../Assets/Recruiter.svg';
import Designer from '../../Assets/Designer.svg';
import Developer from '../../Assets/Developer.svg';
import other from '../../Assets/other.svg';
import './Ddr.scss'

function Ddr() {
  return (
      <div className='Ddr-card'>
          <div className="card-section">
              <h1 className="ddr-head">
                  Are you a designer, developer or recruiter?
               </h1>
               <div className="section-1">
                <div className="cardone">
                    <img className="first-img" src={Designer} alt="ab" />
                    <h6 className="head6">Designer</h6>
                </div>
                <div className="cardone">
                    <img className="first-img" src={Developer} alt="ab" />
                    <h6 className="head6">Developer</h6>
               </div>
               </div>

               <div className="section-1">
                <div className="cardone">
                    <img className="first-img" src={Recruiter} alt="ab" />
                    <h6 className="head6">Recruiter</h6>
                </div>
                <div className="cardone">
                    <img className="first-img" src={other} alt="ab" />
                    <h6 className="head6">other</h6>
               </div>
               </div>
          </div>

      </div>
  )
}

export default Ddr