import React from 'react';
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>
        Survey Sender!
      </h1>
      Collect feedback from your users. To create a new survey please <a href= "/auth/google">login in with google.</a> Then continue to the <Link to ='/surveys/new/'> <a>create</a> </Link>page.
    </div>
  )
}
export default Landing;
