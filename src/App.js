import React, { useState } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
const App = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [inputValue, setInputValue] = useState("");

  // Liste des lieux avec leurs icônes associées
  const locations = [
    { name: "Sousse", icon: "fa-map-marker-alt" },
    { name: "Hammamet", icon: "fa-map-marker-alt" },
    { name: "Tunis", icon: "fa-map-marker-alt" },
    { name: "Tozeur", icon: "fa-map-marker-alt" },
    { name: "Tabarka", icon: "fa-map-marker-alt" },
    { name: "Monastir", icon: "fa-map-marker-alt" },
    { name: "Kairouan", icon: "fa-map-marker-alt" },
    { name: "Mahdia", icon: "fa-map-marker-alt" },
    { name: "Bizerte", icon: "fa-map-marker-alt" },
    { name: "Djerba", icon: "fa-map-marker-alt" },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowOptions(true); // Show options when typing
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location.name);
    setInputValue(location.name); // Set the input value to the selected location
    setShowOptions(false); // Close the dropdown after selection
  };

  return (
    <div className="select-menu">
      <input
        type="text"
        id="locationInput"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Où allez-vous ?"
        onClick={() => setShowOptions(true)} // Show options when input is clicked
      />
      {showOptions && (
        <div className="options-list active">
          {locations
            .filter((location) =>
              location.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((location, index) => (
              <div
                key={index}
                className={`option ${
                  selectedLocation === location.name ? "selected" : ""
                }`}
                onClick={() => handleSelectLocation(location)}
              >
                <i className={`fas ${location.icon} location-icon`}></i> {/* Icône à gauche */}
                {location.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default App;
