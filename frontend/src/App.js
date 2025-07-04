import React, { useState, useEffect } from 'react';
import { fetchReports } from './api';
import Filter from './components/filter';
import ReportCard from './components/reportCard';
import './App.css';

function App() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  const loadReports = () => {
    setLoading(true);
    fetchReports(category)
      .then((response) => {
        setReports(response.data);
        setError(null);
      })
      .catch(() => {
        setError('Failed to fetch reports');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadReports();
  }, [category]);

  const uniqueCategories = [...new Set(reports.map(r => r.category))];

  return (
    <div className="contentContainer">
      <h1>Reports Dashboard</h1>
      <Filter
        options={['All', ...uniqueCategories]}
        selected={category}
        onChange={(value) => setCategory(value === 'All' ? '' : value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="reportCard">
        {reports.map(report => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}

export default App;


