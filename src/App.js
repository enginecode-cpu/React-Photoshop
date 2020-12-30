import React, { useState } from "react";
import Slider from "./components/Slider";
import SidebarItem from "./components/SidebarItem";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIdx];

  const handleChange = (e) => {
    setOptions((prevOpt) =>
      prevOpt.map((option, index) => {
        if (index !== selectedOptionIdx) return option;
        return { ...option, value: e.target.value };
      })
    );
  };

  const getImageStyle = () => {
    const filters = options.map(
      (option) => `${option.property}(${option.value}${option.unit})`
    );

    return { filter: filters.join(" ") };
  };

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()} />
      <div className="sidebar">
        {options.map((option, index) => (
          <SidebarItem
            key={option.name}
            name={option.name}
            active={index === selectedOptionIdx}
            handleClick={() => setSelectedOptionIdx(index)}
          />
        ))}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
