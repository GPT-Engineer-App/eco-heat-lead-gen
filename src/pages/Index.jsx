import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.nocodemoney.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@nocodemoney.com",
          subject: "Contact Form Submission",
          ...formData,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Network response was not ok");
      }

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("There was an error sending your email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/sustainable-background.jpg')" }}>
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Ihr Name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Ihre Email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">Telefonnummer</Label>
              <Input id="phone" type="tel" placeholder="Ihre Telefonnummer" value={formData.phone} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Jetzt informieren"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;