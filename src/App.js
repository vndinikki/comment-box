import React, { useState } from 'react';
import './style.css';
import DisplayPosts from './components/DisplayPosts';
import { data } from './data';

export default function App() {
  return (
    <div>
      <DisplayPosts data={data} />
    </div>
  );
}
