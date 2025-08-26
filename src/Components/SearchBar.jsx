import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialty, setSpecialty] = useState('all');

  const specialties = [
    { value: 'all', label: 'All Specialties' },
    { value: 'orthodontics', label: 'Orthodontics' },
    { value: 'periodontics', label: 'Periodontics' },
    { value: 'endodontics', label: 'Endodontics' },
    { value: 'pediatric', label: 'Pediatric Dentistry' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, specialty });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-bar__form">
        <div className="search-bar__input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cases..."
            className="search-bar__input"
            aria-label="Search cases"
          />
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="search-bar__select"
            aria-label="Select specialty"
          >
            {specialties.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="search-bar__button" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass"></i>
          Search
        </button>
      </form>
    </div>
  );
}