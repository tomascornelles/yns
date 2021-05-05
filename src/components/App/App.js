import React from 'react'
import Content from '../Content/Content';
import Experience from '../Experience/Experience';
import Reviews from '../Reviews/Reviews';
import './App.scss';

/**
 * Main component of the app layout
 */
export default class App extends React.Component {
  render() {
    return (
      <>
        <main>
          <Content />
          <Experience />
        </main>
        <aside>
          <Reviews />
        </aside>
      </>
    )
  }
}
