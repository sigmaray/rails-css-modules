// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import '../styles/global/baz.sass'
import '../styles/foobar.sass'
import styles from '../styles/foobar.sass.json' // importing css class map

const Hello = props => (
  <div className={styles.foobar}>Using foobar css class in React</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
