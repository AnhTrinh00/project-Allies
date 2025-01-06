import { useState } from "react";
import "../styling/List.css";

interface ListProps {
  onSubItemClick: (itemName: string, subItemName: string) => void;
}

function List({ onSubItemClick }: ListProps) {
  const [expandItems, setExpandItems] = useState<{ [key: number]: boolean }>({});

  const items = [
    {
      name: "Number Systems",
      subItems: ["Number Conversion", "Binary Arithmetic"]
    },
    {
      name: "Boolean Algebra",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Data Representation",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Bitwise Operations",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Algorithmic Calculations",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Networking",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Memory Calculations",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Cryptography",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Time Complexity",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Operating Systems",
      subItems: ["Sub-item 1", "Sub-item 2"]
    },
    {
      name: "Miscellaneous Conversions",
      subItems: ["Sub-item 1", "Sub-item 2"]
    }
  ];

  const toggleItem = (index: number) => {
    setExpandItems(prev => ({
        ...prev,
        [index]: !prev[index]
    }));
};
  
  return (
    <div className="list">
      <div className="list-container">
      <div className="items-list">
          {items.map((item, index) => (
            <div key={index} className="items">
              <button onClick={() => toggleItem(index)} className="item">
                <span>{item.name}</span>
              </button>
              {expandItems[index] && (
                <div className="items-expand">
                  {item.subItems.map((subItem, subIndex) => (
                    <button 
                      key={subIndex} 
                      className="sub-item"
                      onClick={() => onSubItemClick(item.name, subItem)}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;