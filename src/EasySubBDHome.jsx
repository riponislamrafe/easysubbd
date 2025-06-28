// EasySubBD – Custom React Website (Landing Page Style)

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Zap, ShieldCheck } from "lucide-react";

export default function EasySubBDHome() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-950 text-white min-h-screen p-6">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-green-400">EasySubBD</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#services" className="hover:text-green-300">Services</a>
          <a href="#pricing" className="hover:text-green-300">Pricing</a>
          <a href="#contact" className="hover:text-green-300">Contact</a>
        </nav>
      </header>

      <section className="text-center py-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">No Dollar Card? No Problem!</h2>
        <p className="text-lg text-slate-300 mb-6">Get ChatGPT Plus, YouTube Premium, VPN & more – Pay in BDT</p>
        <Button size="lg" className="bg-green-500 hover:bg-green-600">Get Started</Button>
      </section>

      <section id="services" className="py-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Services</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <Zap className="w-10 h-10 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">ChatGPT Plus</h4>
              <p>Access GPT-4, image understanding & more. Activated within 10 minutes!</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">VPN & Software</h4>
              <p>Premium VPNs and paid software like Canva, Adobe – fully secure access.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <MessageSquare className="w-10 h-10 text-green-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">YouTube Premium</h4>
              <p>No ads, background play, and official Premium features in your YouTube app.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Pricing</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Card className="w-full md:w-64">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">ChatGPT Plus</h4>
              <p className="text-green-400 text-2xl font-semibold">৳750/month</p>
              <Button className="mt-4 bg-green-500 hover:bg-green-600 w-full">Order Now</Button>
            </CardContent>
          </Card>
          <Card className="w-full md:w-64">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">YouTube Premium</h4>
              <p className="text-green-400 text-2xl font-semibold">৳350/month</p>
              <Button className="mt-4 bg-green-500 hover:bg-green-600 w-full">Order Now</Button>
            </CardContent>
          </Card>
          <Card className="w-full md:w-64">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold">VPN + Software</h4>
              <p className="text-green-400 text-2xl font-semibold">৳299/month</p>
              <Button className="mt-4 bg-green-500 hover:bg-green-600 w-full">Order Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Order via Messenger</h3>
        <p className="text-slate-400 mb-4">Message us directly for activation and support</p>
        <Button variant="outline" className="text-white border-green-500 hover:bg-green-600">
          Message on Facebook
        </Button>
      </section>

      <footer className="pt-10 mt-10 border-t border-slate-700 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} EasySubBD. All rights reserved.
      </footer>
    </main>
  );
}
