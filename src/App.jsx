import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import HelpfulResource from './components/HelpfulResource.jsx';

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
    <Section title='Helpful Resources'>
      <HelpfulResource
      link='https://www.codecademy.com/learn/react-101?g_network=g&g_productchannel=&g_adid=699445943165&g_locinterest=&g_keyword=learn%20reactjs&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-304316427811&g_ifcreative=&g_campaign=account&g_locphysical=9026542&g_adgroupid=165097892289&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=21287608736&g_ifproduct=&utm_id=t_kwd-304316427811:ag_165097892289:cp_21287608736:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=learn%20reactjs&utm_campaign=US_-_Exact&utm_content=699445943165&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=Cj0KCQjwz7C2BhDkARIsAA_SZKbry-wC8S75TEOkNl-v8L78nZMT1oUr9Up2q80FquZBh47tSxYj99YaAuy6EALw_wcB'
      label='Learn React on Codecademy'
      />
      <HelpfulResource 
      link='https://v2.scrimba.com/learn-react-c0e'
      label='Learn React on Scrimba'
      />
      <HelpfulResource 
      link='https://egghead.io/courses/the-beginner-s-guide-to-react'
      label="The Beginner's Guide to React"
      />
    </Section>
    </>
  );
}

export default App;
