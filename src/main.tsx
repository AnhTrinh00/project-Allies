import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Nav from './Component/Nav.tsx'
import List from './Component/List.tsx'
import Tab from './Component/Tab.tsx'

import './index.css'
import NumCon from './Component/Sub-items/NumCon.tsx'
import BinaryArith from './Component/Sub-items/BinaryArith.tsx'

function Main() {
  const [selectedSubItem, setSelectedSubItem] = useState<{ itemName: string, subItemName: string } | null>(null);

  const handleSubItemClick = (itemName: string, subItemName: string) => {
    setSelectedSubItem({ itemName, subItemName });
  }

  const handleLogoClick = () => {
    setSelectedSubItem(null);
  };

  let TabComponent = Tab;
  if (selectedSubItem) {
    if (selectedSubItem.itemName === "Number Systems") {
      if (selectedSubItem.subItemName === "Number Conversion") {
        TabComponent = NumCon;
      } else if (selectedSubItem.subItemName === "Binary Arithmetic") {
        TabComponent = BinaryArith;
      }
    }
  }

  return (
    <StrictMode>
      <Router>
        <Nav onLogoClick={handleLogoClick} />
        <div className="container">
          <List onSubItemClick={handleSubItemClick} />
          <TabComponent />
        </div>
      </Router>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);