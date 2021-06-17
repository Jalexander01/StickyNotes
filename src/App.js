import React from 'react';
import Header from './components/header/Header.component.jsx';
import Footer from './components/footer/Footer.component.jsx';
import Note from './components/note/Note.component.jsx';
import notes from './components/notes';


// function noteComponent(props) {
//   return (<Note key={props.key} title={props.title}
//     content={props.content}
//   />)
// }


function App() {

  return (
    <div >
      <Header />
      {/* {notes.map(noteComponent)} */}
      {notes.map(props =>
        <Note key={props.key} title={props.title}
          content={props.content}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

