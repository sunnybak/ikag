"use client";

import { useState } from "react";
import Eval from "./Eval";
import SkuSearch from "./SkuSearch";
import StatusBar from "./StatusBar";
import VendorList from "./VendorList";
import { Vendor } from "@/models/vendor";

function App() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [vendorsLoading, setVendorsLoading] = useState<boolean>(false);

  const retrieveVendors = () => {
    setVendorsLoading(true);

    setTimeout(() => {
      setVendors([
        {
          name: "Vendor 1",
          link: "https://vendor1.com",
          price: 100,
          sku: "123",
          phoneNumber: "123-456-7890",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
        },
        {
          name: "Vendor 2",
          link: "https://vendor2.com",
          price: 120,
          sku: "123",
          phoneNumber: "123-456-7890",
          shipByDate: "2022-12-31",
          googleRating: 3,
        },
        {
          name: "Vendor 3",
          link: "https://vendor3.com",
          price: 90,
          sku: "123",
          phoneNumber: "123-456-7890",
          shipByDate: "2022-12-31",
          googleRating: 4,
        },
      ]);

      setVendorsLoading(false);
    }, 500);
  };

  const updateVendors = (vendors: Vendor[]) => {
    setVendors(vendors);
  };

  return (
    <div className="App">
      <header className="App-header">
        <StatusBar />
        {/* <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4"> */}
        <div className="flex flex-col gap-4 p-4">
          <SkuSearch
            retrieveVendors={retrieveVendors}
            vendorsLoading={vendorsLoading}
          />
          <VendorList
            vendors={vendors}
            updateVendors={updateVendors}
            vendorsLoading={vendorsLoading}
          />
          {/* <Eval /> */}
        </div>

        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
