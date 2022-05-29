import React from "react";

import "../styles/Layout.scss"

const Layout = (props) => {
  return (
		<div className={"layout " + (props.className ? props.className : "" )  }> 
			{props.children} 
		</div>
		);
};

export default Layout
