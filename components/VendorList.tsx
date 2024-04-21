"use client";

import { AppActionType, useAppContext } from "@/context/context";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import React, { useState } from "react";
import { Vendor } from "@/models/vendor";
import ButtonSpinner from "./ButtonSpinner";
import { Quote } from "@/models/quote";
import { set } from "zod";

export default function VendorList({
  vendors,
  updateVendors,
  vendorsLoading,
}: {
  vendors: Vendor[];
  updateVendors: (vendors: Vendor[]) => void;
  vendorsLoading: boolean;
}) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loadingIndex, setLoadingIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);

  const selectVendor = (index: number) => {
    updateVendors(
      vendors.map((vendor: any, i: any) => {
        if (i === index) {
          return { ...vendor, selected: !vendor.selected };
        }
        return vendor;
      })
    );
  };

  const selectedVendors = vendors.filter((vendor) => vendor.selected);

  const startPollingQuotes = () => {
    setLoading(true);
    setLoadingIndex(0);

    const interval = setInterval(async () => {
      const response = await fetch("/api/quotes");
      const body = await response.json();

      const newQuotes = body.data;

      if (newQuotes.length > quotes.length) {
        console.log("New Quotes", newQuotes);
        console.log("Old Quotes", quotes);

        setQuotes(newQuotes);
        setLoadingIndex(newQuotes.length);

        // Pass data
        await initiateCall();
      }

      if (newQuotes.length === selectedVendors.length) {
        loading && setLoading(false);
        clearInterval(interval);
      }

      console.log(body);
    }, 1000);
  };

  const initiateAgents = async () => {
    // const selectedVendors = vendors.filter((vendor) => vendor.selected);

    // console.log("Selected Vendors", selectedVendors);

    // fetch http://127.0.0.1:8080/make-call/

    startPollingQuotes();

    // pass data
    await initiateCall();
  };

  const initiateCall = async () => {
    return await fetch("http://127.0.0.1:8080/make-call/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Vendors</CardTitle>
          <CardDescription>
            Here are vendors that we found who might carry the item which you
            are searching for
          </CardDescription>
        </CardHeader>
        <CardContent>
          {vendorsLoading && (
            <div className="w-full h-[200px] flex items-center justify-center">
              <ButtonSpinner />
            </div>
          )}

          {!vendorsLoading && vendors.length > 0 && (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Link</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendors.map((vendor, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        id="selected"
                        checked={vendor.selected}
                        onCheckedChange={() => selectVendor(index)}
                      />
                    </TableCell>
                    <TableCell>{vendor.name}</TableCell>
                    <TableCell>{vendor.link}</TableCell>
                    <TableCell>{vendor.price}</TableCell>
                    <TableCell>{vendor.googleRating}</TableCell>
                    <TableCell>
                      <ButtonSpinner show={index === loadingIndex} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {/* <Button variant="outline">Start</Button> */}
          <Button
            onClick={async () => await initiateAgents()}
            disabled={selectedVendors.length === 0}
          >
            I Know A Guy
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Quotes</CardTitle>
          <CardDescription>Retrieved quotes</CardDescription>
        </CardHeader>
        <CardContent>
          {quotes.length > 0 && (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Quote</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotes.map((quote, index) => (
                  <TableRow key={index}>
                    <TableCell>{quote.sku}</TableCell>
                    <TableCell>{quote.quote}</TableCell>
                    <TableCell>{quote.email}</TableCell>
                    <TableCell>{quote.date}</TableCell>
                    <TableCell>{quote.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
