'use client';

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import React from "react";

export default function SkuSearch() {
  const [skus, setSkus] = React.useState<any[]>([]);
  const [vendors, setVendors] = React.useState<any[]>([]);

  const find = () => {
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
    ],
    );
  }

  const addRow = () => {
    setSkus([...skus, { sku: "", quantity: "", price: "", date: new Date() }]);
  };

    const removeRow = (index: number) => {
      setSkus(skus.filter((_, i) => i !== index));
    };

    const updateStringValue = (index: number, key: string, value: any) => {
      setSkus(skus.map((sku: any, i: any) => {
        if (i === index) {
          return { ...sku, [key]: value };
        }
        return sku;
      }));
    };

    const updateDateValue = (index: number, key: string, value: string) => {
      setSkus(skus.map((sku: any, i: any) => {
        if (i === index) {
          return { ...sku, [key]: new Date(value) };
        }
        return sku;
      }));
    };

    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add items to your search</CardTitle>
          <CardDescription>
            Add items that you want the agent to help you find
          </CardDescription>
        </CardHeader>
        <CardContent>
          {skus.length > 0 && (
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Previous price you paid</TableHead>
                  <TableHead>Date needed by</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skus.map((sku: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Input
                        id="sku"
                        placeholder="Stock keeping unit number of a product"
                        value={sku.sku}
                        onChange={(e) =>
                          updateStringValue(index, "sku", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        id="quantity"
                        placeholder="Quantity of products"
                        value={sku.quantity}
                        onChange={(e) =>
                          updateStringValue(index, "quantity", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        id="price"
                        placeholder="Previous price you paid"
                        value={sku.price}
                        onChange={(e) =>
                          updateStringValue(index, "price", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        id="date"
                        type="date"
                        placeholder="Date needed by"
                        value={sku.date.toISOString().split("T")[0]}
                        onChange={(e) =>
                          updateDateValue(index, "date", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      {index > 0 ? (
                        <Button
                          onClick={() => removeRow(index)}
                          variant="outline"
                        >
                          <X />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => removeRow(index)}
                          variant="outline"
                          className="invisible"
                        >
                          <X />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={addRow} variant="outline">
            <Plus />
          </Button>
          <Button onClick={find}>Find vendors for these items</Button>
        </CardFooter>
      </Card>
    );
  }
