import React from 'react';

import Form from './Form';

const items = [
  { id: 'name', label: 'Your Name', type: 'text' },
  { id: 'cookies', label: '# of 🍪\'s', type: 'number' },
  { id: 'food', label: 'Favourite food', type: 'text' },
]

export default () => <Form items={items} />;
