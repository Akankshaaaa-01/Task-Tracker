import "../styles/Sidebar.css";

function Sidebar(){
    return (
      <aside className="sidebar">

        {/* Logo and tagline are grouped together */}
        <div className="brand">
          <h1>Taskify <span>❧</span> </h1>
             <p className="tagline">
            A MORE THOUGHTFUL
            <br />
            YOU
          </p>
        </div>

        {/* Sidebar navigation */}
        <nav className="navigation">
          <button className="nav-item active">
            <span className="nav-icon">⌂</span>
            Home
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            My Tasks
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Calendar
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Notes
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Journal
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Focus
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Library
          </button>

          <button className="nav-item">
            <span className="nav-icon">☷</span>
            Settings
          </button>
        </nav>

      </aside>
    );
}

export default Sidebar;

