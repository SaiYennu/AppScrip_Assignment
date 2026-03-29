import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SideNavbar from './components/SideNavbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filter toggle
  const [showFilter, setShowFilter] = useState(true);

  // mobile filter
  const [mobileFilter, setMobileFilter] = useState(false);


  // sort dropdown
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  // close dropdown outside
  useEffect(() => {
    const close = () => setIsSortOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="app-container">

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
      </section>

      {/* TOOLBAR */}
      <div className="toolbar">

        {/* LEFT */}
        <div className="toolbar-left">

          <span className="item-count">
            {products.length} ITEMS
          </span>

          <button
            className="filter-toggle desktop-only show-hide-filter"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "⌵ HIDE FILTER" : "⌵ SHOW FILTER"}
          </button>

          {/* MOBILE FILTER */}
          <button
            className="filter-toggle mobile-only"
            onClick={() => setMobileFilter(true)}
          >
            FILTER
          </button>

        </div>

        {/* RIGHT */}
        <div
          className="toolbar-right"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="custom-dropdown"
            onClick={() => setIsSortOpen(!isSortOpen)}
          >
            {selectedSort} ⌵

            {isSortOpen && (
              <ul className="dropdown-menu">
                {[
                  "RECOMMENDED",
                  "NEWEST FIRST",
                  "POPULAR",
                  "PRICE: HIGH TO LOW",
                  "PRICE: LOW TO HIGH"
                ].map(option => (
                  <li
                    key={option}
                    onClick={() => {
                      setSelectedSort(option);
                      setIsSortOpen(false);
                    }}
                  >
                    {selectedSort === option && "✓ "}
                    {option}
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>

      </div>

      {/* MAIN LAYOUT */}
      <div className="main-layout">

        {/* DESKTOP SIDEBAR */}
        {showFilter && (
          <SideNavbar
            isOpen={false}
          />
        )}

        {/* PRODUCTS */}
        <main
          className={`grid-container ${!showFilter ? "expanded" : ""}`}
        >

          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            products.map((item, index) => (
              <ProductCard
                key={item.id}
                product={item}
                index={index}
              />
            ))
          )}

        </main>

      </div>
      <div className='desktop-mode'>
        {/* MOBILE SIDEBAR */}
        <SideNavbar
          isOpen={mobileFilter}
          onClose={() => setMobileFilter(false)}
        />
      </div>
      <Footer />

    </div>
  );
}

export default App;