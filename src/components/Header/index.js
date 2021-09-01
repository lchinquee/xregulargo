import React from 'react';
import coverImage from '../../assets/cover/profile-pic.jpg';

function Header() {
  return (
    <section>
      <h1 id="about">ChinQuee</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
    </section>
  );
}

export default Header;