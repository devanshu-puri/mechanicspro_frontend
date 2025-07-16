import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { API_URL } from '../Api/Apiurl'; // Adjust the import path as necessary
const GarageList = () => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const navigate = useNavigate();
  const [garages, setGarages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const {areaName} = useParams();
  

  useEffect(() => {
    const fetchGarages = async () => {
      try {
        const response = await fetch(`${API_URL}/api/garages/zone/${areaName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch garages');
        }
        const data = await response.json();
        setGarages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGarages();
  }, []);

  const visibleGarages = showAll ? garages : garages.slice(0, 5);

  if (loading) {
    return <div className="text-center mt-5">Loading garages...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="container mt-4 mb-5 d-flex justify-content-center">
      <div style={{ width: '500px', maxWidth: '90%' }}>
        <h4 className="mb-3 text-center">Recommended Garages in {areaName}</h4>

        {visibleGarages.map((garage) => (
          <div
            key={garage._id}
            className="d-flex align-items-center justify-content-between border rounded p-2 mb-2 shadow-sm garage-card"
            style={{ minHeight: '80px', transition: 'transform 0.2s ease' }}
          >
            <div
              className="d-flex align-items-center"
              onClick={() => navigate(`/garage/${garage._id}`)}
              style={{ flex: 1, cursor: 'pointer', gap: '10px' }}
            >
              <img
               src={`${API_URL}/${garage.GarageMainImage}`} // assuming your API returns the full image URL or relative path that works here
                alt={garage.GarageName}
                className="rounded me-2"
                width="50"
                height="50"
              />
              <div style={{ lineHeight: '1.2' }}>
                <h6 className="mb-1" style={{ fontSize: '14px' }}>{garage.GarageName}</h6>
                {/* If you get rating from API, show stars accordingly */}
                <small>{'★'.repeat(garage.rating || 5)}{'☆'.repeat(5 - (garage.rating || 5))}</small>
              </div>
            </div>
            <div onClick={() => toggleFavorite(garage)} style={{ cursor: 'pointer' }}>
              {isFavorite(garage.id)
                ? <FaHeart color="red" size={18} />
                : <FaRegHeart size={18} color="gray" />}
            </div>
          </div>
        ))}

        {!showAll && garages.length > 5 && (
          <div className="text-center mt-3">
            <button className="btn btn-outline-primary btn-sm" onClick={() => setShowAll(true)}>
              View Full List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GarageList;
