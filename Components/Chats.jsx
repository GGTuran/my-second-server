import React from 'react';

const Chats = () => {
    return (
      <div className="toast toast-top toast-center">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>

<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<label className="swap swap-flip text-9xl">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  <div className="swap-on">😈</div>
  <div className="swap-off">😇</div>
</label>



 
    );
};

export default Chats;