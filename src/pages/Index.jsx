import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Willkommen bei Wärmepumpen-Hersteller
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Entdecken Sie die besten Heizsysteme, die den neuen gesetzlichen
            Anforderungen entsprechen.
          </p>
          <Separator className="my-4" />
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Ihr Name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Ihre Email" />
            </div>
            <div>
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" />
            </div>
            <Button type="submit" className="w-full">
              Jetzt informieren
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;