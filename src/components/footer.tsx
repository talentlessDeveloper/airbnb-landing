import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import React from "react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 tracking-tight">
      <div className="px-6 md:px-10">
        <h2 className="my-5 text-xl font-semibold md:text-2xl">
          Inspiration For future getaways
        </h2>
        <div className="flex flex-col gap-8 md:gap-16">
          <TabsDemo />
          <Separator />
        </div>
        <div className="mt-4 flex flex-wrap justify-between md:mt-8">
          <div className="mb-8 w-full md:mb-0 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  AirCover
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Anti-discrimination
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Disability support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Cancellation options
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Report neighborhood concern
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full md:mb-0 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 font-semibold">Hosting</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Airbnb your home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  AirCover for Hosts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Hosting resources
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Community forum
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Hosting responsibly
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Airbnb-friendly apartments
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Join a free Hosting class
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full md:mb-0 md:w-1/3 lg:w-1/4">
            <h3 className="mb-4 font-semibold">Airbnb</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Newsroom
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  New features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Investors
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Gift cards
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-700">
                  Airbnb.org emergency stays
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-6 text-center">
          <p className="text-sm text-gray-600">
            © 2024 Airbnb, Inc. ·{" "}
            <a href="#" className="text-gray-600">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="text-gray-600">
              Sitemap
            </a>{" "}
            ·{" "}
            <a href="#" className="text-gray-600">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="text-gray-600">
              Your Privacy Choices
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-600">
              🌐
            </a>
            <a href="#" className="text-gray-600">
              💲
            </a>
            <a href="#" className="text-gray-600">
              📘
            </a>
            <a href="#" className="text-gray-600">
              🐦
            </a>
            <a href="#" className="text-gray-600">
              📸
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export function TabsDemo() {
  return (
    <Tabs defaultValue="popular" className="w-full">
      <TabsList className="grid grid-cols-4 gap-2 md:md:grid-cols-4 lg:grid-cols-8">
        <TabsTrigger value="popular">Popular</TabsTrigger>
        <TabsTrigger value="arts">Arts </TabsTrigger>
        <TabsTrigger value="outdoors" className="hidden md:block">
          Outdoors
        </TabsTrigger>
        <TabsTrigger value="mountains">Mountains</TabsTrigger>
        <TabsTrigger value="beach">Beach</TabsTrigger>
        <TabsTrigger value="unique" className="hidden md:block">
          Unique Stays
        </TabsTrigger>
        <TabsTrigger value="categories" className="hidden md:block">
          Categories
        </TabsTrigger>
        <TabsTrigger value="things" className="hidden md:block">
          Things to Do
        </TabsTrigger>
      </TabsList>
      <TabsContent value="popular" className="pt-4 md:pt-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Canmore</h3>
            <p>Vacation rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Benalmádena</h3>
            <p>House rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Marbella</h3>
            <p>House rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Marbella</h3>
            <p>House rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Marbella</h3>
            <p>House rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Marbella</h3>
            <p>House rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Mijas</h3>
            <p>Vacation rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Mijas</h3>
            <p>Vacation rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Mijas</h3>
            <p>Vacation rentals</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="arts">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Florence</h3>
            <p>Museum tours</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">Paris</h3>
            <p>Art galleries</p>
          </div>
          <div>
            <h3 className="font-semibold">New York</h3>
            <p>Theater shows</p>
          </div>
          <div>
            <h3 className="font-semibold">New York</h3>
            <p>Theater shows</p>
          </div>
          <div>
            <h3 className="font-semibold">New York</h3>
            <p>Theater shows</p>
          </div>
          <div>
            <h3 className="font-semibold">New York</h3>
            <p>Theater shows</p>
          </div>
          <div>
            <h3 className="font-semibold">Berlin</h3>
            <p>Historical sites</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="outdoors">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Banff</h3>
            <p>Hiking trails</p>
          </div>
          <div>
            <h3 className="font-semibold">Yosemite</h3>
            <p>National parks</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Rocky Mountains</h3>
            <p>Camping spots</p>
          </div>
          <div>
            <h3 className="font-semibold">Swiss Alps</h3>
            <p>Ski resorts</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="mountains">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Aspen</h3>
            <p>Ski resorts</p>
          </div>
          <div>
            <h3 className="font-semibold">Chamonix</h3>
            <p>Mountain climbing</p>
          </div>
          <div>
            <h3 className="font-semibold">Telluride</h3>
            <p>Snowboarding</p>
          </div>
          <div>
            <h3 className="font-semibold">Zermatt</h3>
            <p>Mountain hiking</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="beach">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Malibu</h3>
            <p>Beach houses</p>
          </div>
          <div>
            <h3 className="font-semibold">Hawaii</h3>
            <p>Beach resorts</p>
          </div>
          <div>
            <h3 className="font-semibold">Bahamas</h3>
            <p>Beach rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Bahamas</h3>
            <p>Beach rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Bahamas</h3>
            <p>Beach rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Bahamas</h3>
            <p>Beach rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Bahamas</h3>
            <p>Beach rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Bora Bora</h3>
            <p>Luxury villas</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="unique">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Treehouses</h3>
            <p>Unique stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Houseboats</h3>
            <p>Floating homes</p>
          </div>
          <div>
            <h3 className="font-semibold">Yurts</h3>
            <p>Glamping</p>
          </div>
          <div>
            <h3 className="font-semibold">Caves</h3>
            <p>Underground stays</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="categories">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Family trips</h3>
            <p>Kid-friendly</p>
          </div>
          <div>
            <h3 className="font-semibold">Romantic getaways</h3>
            <p>Couples</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure</h3>
            <p>Thrill-seekers</p>
          </div>
          <div>
            <h3 className="font-semibold">Luxury</h3>
            <p>High-end stays</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="things">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">City tours</h3>
            <p>Explore cities</p>
          </div>
          <div>
            <h3 className="font-semibold">Food tours</h3>
            <p>Culinary experiences</p>
          </div>
          <div>
            <h3 className="font-semibold">Adventure sports</h3>
            <p>Skydiving, rafting</p>
          </div>
          <div>
            <h3 className="font-semibold">Relaxation</h3>
            <p>Spa and wellness</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="tips">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">Packing tips</h3>
            <p>Travel light</p>
          </div>
          <div>
            <h3 className="font-semibold">Safety tips</h3>
            <p>Stay safe</p>
          </div>
          <div>
            <h3 className="font-semibold">Budget travel</h3>
            <p>Save money</p>
          </div>
          <div>
            <h3 className="font-semibold">Travel guides</h3>
            <p>Best destinations</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
      <TabsContent value="apartments">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <h3 className="font-semibold">New York</h3>
            <p>Apartment rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">Los Angeles</h3>
            <p>Luxury apartments</p>
          </div>
          <div>
            <h3 className="font-semibold">Chicago</h3>
            <p>Downtown rentals</p>
          </div>
          <div>
            <h3 className="font-semibold">San Francisco</h3>
            <p>Bay area apartments</p>
          </div>
          {/* Add more dummy items as needed */}
        </div>
      </TabsContent>
    </Tabs>
  );
}
