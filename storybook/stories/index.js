import React from 'react'
import { storiesOf } from '@storybook/react'
import Atom from '__src__/components/atoms/buton/orange.stories.js'

storiesOf('Atom', module)
  .add('default', () => (
    <Atom />
  ))
