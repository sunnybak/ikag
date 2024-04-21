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
          name: "McKesson",
          link: "https://mms.mckesson.com/product/500655/Covidien-SMM-5043",
          price: 698.35,
          sku: "Covidien #SMM-5043",
          phoneNumber: "19292806660",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
          selected: true,
        },
        {
          name: "Henry Schein",
          link: "https://www.henryschein.com/us-en/Shopping/ProductDetails.aspx?productid=2946635&cdivId=specialmarkets_d&CatalogName=B_PRIME&name=Maxon%20Suture%20Polyglyconate%20Copolymer%204-0%2018&quot;%20P-12%2036/Bx&did=specialmarkets_d&ShowProductCompare=true&FullPageMode=true",
          price: 326.88,
          sku: "Covidien #SMM-5043",
          phoneNumber: "12056024338",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
          selected: true,
        },
        {
          name: "Med Equip Depot",
          link: "https://www.ciamedical.com/covidien-smm5043-box-suture-maxon-mono-clr-p12-4-0-18-36-bx",
          price: 491.44,
          sku: "Covidien #SMM-5043",
          phoneNumber: "14155164312",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
          selected: true,
        },
        {
          name: "Wilburn Medical USA",
          link: "https://www.partssource.com/parts/united-states-surgical-covidien/SMM5043?pspn=ps66ajquman",
          price: 578.26,
          sku: "Covidien #SMM-5043",
          phoneNumber: "19496892624",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
          selected: true,
        },
        {
          name: "CIA Medical",
          link: "https://www.ciamedical.com/covidien-smm5043-box-suture-maxon-mono-clr-p12-4-0-18-36-bx?srsltid=AfmBOopqTxJ_N_nHEqiMb-dzn1bv8WmNXLHWyIGIM3KFdcFCwAZOfi_z_i0",
          price: 491.44,
          sku: "Covidien #SMM-5043",
          phoneNumber: "14152125794",
          shipByDate: "2022-12-31",
          googleRating: 4.5,
          selected: true,
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
