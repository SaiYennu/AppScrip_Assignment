import React from 'react';
import './SideNavbar.css';

const SideNavbar = ({ isOpen, onClose }) => {

  const filters = [
    { title: 'IDEAL FOR', options: ['Men', 'Women', 'Baby & Kids'] },
    { title: 'OCCASION', options: [] },
    { title: 'WORK', options: [] },
    { title: 'FABRIC', options: [] },
    { title: 'SEGMENT', options: [] },
    { title: 'SUITABLE FOR', options: [] },
    { title: 'RAW MATERIALS', options: [] },
    { title: 'PATTERN', options: [] },
  ];

  return (
    <>
      {/* ✅ DESKTOP SIDEBAR */}
      <aside className="sidebar desktop-sidebar" style={{position:'sticky',top:'10px'}}>
        <div className="customizable-row">
          <input type="checkbox" id="custom" />
          <label htmlFor="custom">CUSTOMIZABLE</label>
        </div>

        {filters.map((filter, index) => (
          <details key={filter.title} className="filter-group" open={index === 0}>
            <summary>
              {filter.title}
              <span>⌵</span>
            </summary>

            <div className="filter-content">
              <p>All</p>

              {filter.options.length > 0 && (
                <div className="checkbox-list">
                  {filter.options.map(opt => (
                    <label key={opt}>
                      <input type="checkbox" /> {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </aside>

      {/* ✅ MOBILE OVERLAY SIDEBAR */}
      {isOpen && (
        <div className="overlay">

          <aside className="sidebar mobile-sidebar">

            <div className="sidebar-header">
              <h3>FILTERS</h3>
              <button onClick={onClose}>✕</button>
            </div>

            <div className="customizable-row">
              <input type="checkbox" id="custom2" />
              <label htmlFor="custom2">CUSTOMIZABLE</label>
            </div>

            {filters.map((filter, index) => (
              <details key={filter.title} className="filter-group" open={index === 0}>
                <summary>
                  {filter.title}
                  <span>⌵</span>
                </summary>

                <div className="filter-content">
                  <p>All</p>

                  {filter.options.length > 0 && (
                    <div className="checkbox-list">
                      {filter.options.map(opt => (
                        <label key={opt}>
                          <input type="checkbox" /> {opt}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </details>
            ))}
          </aside>

          <div className="overlay-bg" onClick={onClose}></div>
        </div>
      )}
    </>
  );
};

export default SideNavbar;