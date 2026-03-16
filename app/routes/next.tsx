import React, { useEffect } from 'react';
import {redirect} from 'react-router';

const Next:() => React.JSX.Element = () =>  {
  return (
    <>
      {redirect("/")}
    </>
  )
}

export default Next