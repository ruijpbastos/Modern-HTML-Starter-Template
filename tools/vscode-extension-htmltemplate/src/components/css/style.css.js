export default `
/* CSS3 */
/* Modules */
@import './modules/header.css';
@import './modules/main.css';
@import './modules/footer.css';
@import './modules/loader.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #222;
  text-align: center;
  min-height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(yellow, orange);
}

@media (max-width: 636px) {
  header h1 {
    font-size: 2rem;
  }
  main h3 {
    font-size: 1.5rem;
  }
  main li {
    font-size: 1rem;
  }
}
`
