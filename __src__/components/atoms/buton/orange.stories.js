import React from 'react'
import { storiesOf } from '@storybook/react'
import Atom from './orange'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom />
  ))
