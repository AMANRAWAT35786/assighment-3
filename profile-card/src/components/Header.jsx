function Header({ date }) {
  return (
    <header className="header">
      <div>
        <h1>Welcome back, Aman 👋</h1>
        <p>{date}</p>
      </div>
      <div className="user-profile">
        <span>Aman</span>
        <div className="avatar">Am</div>
      </div>
    </header>
  );
}

export default Header;