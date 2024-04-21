'use client'

import Eval from "./Eval";
import SkuSearch from "./SkuSearch";
import StatusBar from "./StatusBar";
import VendorList from "./VendorList";


function App() {
  return (
    <div className="App">
        <header className="App-header">
          <StatusBar />
          {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4"> */}
          <div className="flex flex-col gap-4 p-4">
            <SkuSearch />
            <VendorList />
            <Eval />
          </div>

          {/* </div> */}
        </header>
    </div>
  );
}

export default App;
