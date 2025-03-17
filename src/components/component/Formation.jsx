import React from 'react';
import { SearchBar, AppsList } from './components/combine'; // Chemin corrigé (minuscule)
import Categories from './components/Categories';
import './formation.css';

function Formations() {
  const apps = [
    { name: 'US SLG Communications', description: 'Microsoft Digital' },
    { name: 'MicroNews Spain', description: 'Microsoft Digital' },
    { name: 'ANZ Employee News & Events', description: 'Microsoft' },
    { name: 'Assignment Tracker', description: 'Microsoft Digital' },
    { name: 'VCLO Comms - Viva Learning', description: 'Microsoft Digital' },
    { name: 'MICRONEWS', description: 'Microsoft Digital' },
    { name: 'MW-Bytes', description: 'Microsoft Digital' },
    { name: 'Babyyoda', description: 'LinkedIn' },
    { name: 'MSNZ Major Incident Comms', description: 'Microsoft Digital' },
  ];

  const categories = ['Microsoft', 'Education', 'Productivity', 'Image & Video galleries', 'Project Management', 'Utilities', 'Industries'];

  return (
    <div className="app-container">
      <SearchBar />
      <Categories categories={categories} />
      <AppsList apps={apps} />
    </div>
  );
}

export default Formation ; 