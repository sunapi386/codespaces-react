import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="your-profile-picture.jpg" className="App-logo" alt="logo" />
        <h1>Your Name</h1>
        <p>Software Developer | React Enthusiast</p>
        <ul className="nav">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </header>
      <main className="App-content">
        <section id="projects">
          <h2>My Projects</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <h3>Project 1</h3>
              <p>Description of project 1 goes here</p>
              <img src="project1.png" alt="Project 1 screenshot" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <h3>Project 2</h3>
              <p>Description of project 2 goes here</p>
              <img src="project2.png" alt="Project 2 screenshot" />
            </Grid>
            // Add more projects here
          </Grid>
        </section>
        <section id="resume">
          <h2>My Resume</h2>
          <pdf
            src="your-resume.pdf"
            style={{ width: '100%', height: '100vh' }}
            page={1}
          />
        </section>
      </main>
    </div>
  );
}

export default App;