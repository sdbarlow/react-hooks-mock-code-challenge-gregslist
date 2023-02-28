import React from "react";
import Search from "./Search";

function Header({callback}) {


  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onType={callback}/>
    </header>
  );
}

export default Header;
