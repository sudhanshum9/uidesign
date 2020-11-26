import React from "react";
import "./Body.css";

import DataUsageIcon from '@material-ui/icons/DataUsage';

function Body() {
  return (
    <div className="body">
      <div class="body_content_heading">
        <h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Monthly &nbsp;&nbsp;
          Quarterly &nbsp;&nbsp; Yearly{" "}
        </h4>
      </div>

      <br></br>
      <div className="body_content">
        <h3>40% goals met</h3>
        <p>For Aug 1st - Aug 31st</p>
      </div>
      <br></br>
      <div className="body_1">
        <div className="body_content_1">
          <h3>37/90</h3>
          <h3>
            Branches<br></br> Visited
          </h3>
        </div>

        <div className="body_content_1">
          <h3>24/50</h3>
          <h3>
            Banca<br></br> branches visited
          </h3>
        </div>
        <div className="body_content_1">
          <h3>32/50</h3>
          <h3>
            Leads<br></br>converted
          </h3>
        </div>
      </div>

      <div className="body_2">
        <h2>Your Plans for</h2>
        <div className="body_content_heading">
          <h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yesterday &nbsp;&nbsp;
            Today &nbsp;&nbsp; Tommorow
          </h4>
        </div>
        <br></br>
        <div className="body_content_2">
        <DataUsageIcon/>
          <h3>2 task left </h3>
          <p>3/5 completed</p>
          <div className='body_circle'>
          
          </div>
          
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Body;
