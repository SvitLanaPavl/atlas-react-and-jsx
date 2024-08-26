import Header from './components/Header.jsx';
import Section from './components/Section.jsx';

function App() {
  return (
    <>
    <Header />
    <Section title='What is React?'>
      <p>React is a JavaScript library that helps developers create graphical interfaces for web applications and native platforms.</p>
    </Section>
    <Section title='Benefits of React'>
      <ul>
        <li>Faster debugging and rendering</li>
        <li>Reusability of code components</li>
        <li>Readily available JavaScript Libraries</li>
        <li>Use of Virtual Document Object Model</li>
        <li> Easy to learn and use</li>
      </ul>
    </Section>
    </>
  );
}

export default App;
