import React from "react";

import { BsSearch, BsPeopleFill } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { IoIosCafe } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { MdLocalHospital, MdSchool, MdShoppingCart } from "react-icons/md";
import { MdFormatQuote } from "react-icons/md";
import { FaFacebookSquare, FaTelegram } from "react-icons/fa";
import { GrTwitter, GrInstagram } from "react-icons/gr";

import { places, cat_list, collection_list, IconItem } from "./DummyUtil";
import { Loader01, Loader02, FooterItem } from "./DummyUtil";
import { feature_list } from "./DummyUtil";

import { DiscoverMore, ContentHeader } from "./DummyUtil";
import { CustomInput, CustomLiIcon } from "./DummyUtil";
import { Place, Category, Collection } from "./DummyUtil";
import { Team1stRow, Feature } from "./DummyUtil";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="navbar text-white absolute right-0 left-0 z-10 transparent-nav transition-all">
        <div className="w-9/12 mx-auto py-5 flex justify-between items-center font-comf">
          <div>
            <a href="#" className="text-lg">
              Tail Listing
            </a>
          </div>
          <div>
            <button className="py-2 px-4 rounded-md text-amber-500 border border-amber-500 bg-transparent hover:bg-amber-500 hover:text-white transition-all">
              Add Listing
            </button>
          </div>
          <div className="space-x-4">
            <button className="text-lg">Sign In</button>
            <button className="text-lg">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className="hero-banner relative h-screen">
      <img
        src="/images/hero/hero_4.jpg"
        alt="hero"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75 "></div>
      <div className="absolute inset-0 h-full w-full ">
        <div className="flex justify-center items-center min-h-full w-full">
          <div className="space-y-4">
            <div className="hero-header text-center text-white">
              <p className="text-4xl capitalize font-bold mb-4 font-comf">
                Discover places that people love.
              </p>
              <p className="text-lg">
                We will help you to find the best places in the world.
              </p>
            </div>
            <div className="flex gap-5 ">
              <CustomInput label="Location" />
              <CustomInput label="I'm looking for..." />
              <div>
                <button className="rounded-md py-1.5 px-6 bg-amber-500 text-lg text-white hover:bg-amber-600 flex items-center gap-2">
                  <BsSearch />
                  Search
                </button>
              </div>
            </div>
            <div>
              <ul className="flex gap-5 justify-center text-sm text-white">
                <CustomLiIcon Icon={BiRestaurant} content="Restaurant" />
                <CustomLiIcon Icon={IoIosCafe} content="Cafe" />
                <CustomLiIcon Icon={CgGym} content="Gym" />
                <CustomLiIcon Icon={MdLocalHospital} content="Hospital" />
                <CustomLiIcon Icon={MdSchool} content="School" />
                <CustomLiIcon Icon={MdShoppingCart} content="Shopping" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PopularPlaces = () => {
  return (
    <div className="bg-slate-100 py-12">
      <div className="w-8/12 mx-auto">
        <ContentHeader
          title="Popular Places"
          subtitle="Discover most searched places"
        />
        <div>
          <div className="grid grid-cols-3 gap-10 mx-auto">
            {places.map((place, idx) => (
              <Place
                key={`${idx}-${place.title}`}
                url={place.url}
                title={place.title}
                rating={place.rating}
                address={place.address}
                tags={place.tags}
              />
            ))}
          </div>
          <DiscoverMore />
        </div>
      </div>
    </div>
  );
};

export const Categories = () => {
  return (
    <div className="bg-gray-50 py-32">
      <div className="w-8/12 mx-auto">
        <ContentHeader
          title="Categories"
          subtitle="Discover Places by categories"
        />
        <div>
          <div className="grid grid-cols-4 gap-10">
            {cat_list.map(({ url, content }, idx) => (
              <Category key={idx} url={url} content={content} />
            ))}
          </div>
        </div>
        <DiscoverMore content="More Categories" />
      </div>
    </div>
  );
};

export const Collections = () => {
  return (
    <div className="bg-slate-100 py-32">
      <div className="w-8/12 mx-auto">
        <ContentHeader
          title="Collections"
          subtitle="Discover Places by Collections"
        />
        <div>
          <div className="grid grid-cols-4 gap-10">
            {collection_list.map((col, idx) => (
              <Collection
                key={idx}
                url={col.url}
                status={col.status}
                placeCount={col.placeCount}
              />
            ))}
          </div>
        </div>
        <DiscoverMore content="More Collections" />
      </div>
    </div>
  );
};

export const Teams = () => {
  return (
    <div className="bg-gray-50 py-36 relative">
      <div className="w-8/12 mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-1/2">
            <div className="food w-1/2 h-full absolute top-0 bottom-0 left-0 opacity-30"></div>
            <div className="w-1/2 bg-gradient-to-l from-gray-40 via-transparent absolute top-0 bottom-0 left-0 h-full"></div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-12">
                <Team1stRow
                  url="/images/team/smile.jpeg"
                  title="Fate Foo"
                  subtitle="CEO"
                />
                <Team1stRow
                  url="/images/team/smile_4.jpg"
                  title="Fate Foo"
                  subtitle="CEO"
                />
              </div>
              <div className="flex flex-col gap-12 mt-12">
                <Team1stRow
                  url="/images/team/smile_4.jpg"
                  title="Fate Foo"
                  subtitle="CEO"
                />
                <Team1stRow
                  url="/images/team/smile_man_1.jpg"
                  title="Fate Foo"
                  subtitle="CEO"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <p className="text-sm uppercase font-bold text-indigo-500 mb-1">
              Our Support Heros
            </p>
            <p className="text-4xl font-bold text-gray-600">Meet The Team</p>
            <p className="mt-3 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              sit iste sed vero doloremque praesentium maxime odio amet dolore
              hic explicabo reprehenderit adipisci culpa consequuntur earum,
              harum neque voluptatum ipsa.
            </p>
            <div className="flex mt-10">
              <button className="transition-colors mr-4 py-2 px-3 border-2 border-gray-500 font-semibold  text-gray-500 text-bold-500 shadow-md hover:bg-gray-500 hover:text-white flex items-center gap-2 rounded-full">
                <BsPeopleFill />
                <span>Meet Us</span>
              </button>
              <button className="transition-colors mr-4 py-2 px-3 border-2 border-blue-400 font-semibold text-bold-500 shadow-md bg-blue-400 hover:bg-blue-500 hover:border-blue-500 text-white flex items-center gap-2 rounded-full">
                <BsLightbulbFill />
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Testiminials = () => {
  return (
    <div className="bg-white relative py-36 z-10">
      <div className="bg-slate-100 w-8/12 absolute bottom-0 right-0 top-16 -z-10 rounded-tl-3xl" />
      <div className="w-8/12 mx-auto">
        <div className="mb-20">
          <p className="text-4xl font-libre font-bold text-gray-600 w-5/12">
            What Our Customers Are Saying
          </p>
        </div>
        <div className="flex">
          <div className="w-1/2 ">
            <div className="w-10/12 h-72 relative mb-6">
              <div className="dot-pattern opacity-30 h-48 w-32 absolute -top-24 -left-16 -z-10"></div>
              <div className="dot-pattern opacity-30 h-48 w-32 absolute -bottom-24 -right-16 -z-10"></div>
              <div className="absolute z-10 -top-6 -right-6">
                <div className="bg-indigo-500 text-4xl text-white h-16 w-16 rounded-full flex items-center justify-center">
                  <MdFormatQuote />
                </div>
              </div>
              <img
                src="/images/testimonials/testimonial-2.jpg"
                alt=""
                className="w-full h-full object-cover rounded-md shadow-md "
              />
            </div>
            <div className="flex gap-3">
              <button className="flex justify-center items-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-2">
                <FaAngleLeft />
              </button>
              <button className="flex justify-center items-center h-10 w-10 bg-amber-400 text-white shadow-md hover:shadow-xl rounded-full p-2">
                <FaAngleRight />
              </button>
            </div>
          </div>
          <div className="w-1/2 text-gray-600">
            <p className="text-xl font-semibold capitalize mb-3">
              help us improve our productivity.
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              doloremque! Aut nihil hic incidunt quibusdam modi provident
              dolorum consequatur! Blanditiis repellendus fugit dolores vel.
              Nulla sit iste ea accusamus adipisci.
            </p>
            <div>
              <p className="font-bold text-lg">John Doe</p>
              <p className="">Lead Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="bg-slate-100 py-36">
      <div className="w-9/12 mx-auto">
        <div className="shadow-lg rounded-xl relative">
          <img
            src="/images/contact-us/photo-1524069290683-0457abfe42c3.jpg"
            alt=""
            className="w-full h-[46rem] object-cover rounded-xl"
          />
          <div className="bg-black/70 absolute inset-0 h-full rounded-xl" />

          <div className="absolute left-8 right-8 top-24">
            <div className="flex items-end">
              <div className="w-1/2 text-gray-100">
                <div className="mb-5">
                  <p className="text-4xl font-bold font-comf mb-5">Find Us</p>
                  <div className="flex gap-6">
                    <div className="border-r pr-4 border-white">
                      <p className="font-bold text-2xl font-libre">New York</p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                    <div className="border-r pr-4 border-white">
                      <p className="font-bold text-2xl font-libre">
                        California
                      </p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl font-libre">Delhi</p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 text-gray-600">
                <div className="bg-white max-w-lg rounded-md shadow p-6 ml-auto space-y-6">
                  <div className="text-gray-600">
                    <p className="text-4xl font-bold font-monte mb-4">
                      Get In Touch
                    </p>
                    <p className="">Need help or have some feedback for us?</p>
                    <p>Fill out the form below to contact our team.</p>
                  </div>
                  <form action="" className="space-y-4">
                    <div className="flex text-gray-600 gap-10">
                      <div>
                        <label htmlFor="first_name">First Name</label>
                        <input
                          id="first_name"
                          type="text"
                          placeholder="John"
                          className="py-2 px-3 w-full text-gray-600 rounded-md border mt-0.5"
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name">Last Name</label>
                        <input
                          id="last_name"
                          type="text"
                          placeholder="Doe"
                          className="py-2 px-3 w-full text-gray-600 rounded-md border mt-0.5"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="mail@example.com"
                        className="py-2 px-3 w-full text-gray-600 rounded-md border mt-0.5"
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Good Job! I only have this question..."
                        className="py-2 px-3 w-full text-gray-600 rounded-md border mt-0.5"
                      />
                    </div>
                    <div>
                      <button className="py-2 px-3 rounded-md shadow bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-xl">
                        Get In Touch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="bg-slate-50 py-36">
      <div className="w-8/12 mx-auto">
        <ContentHeader
          title="Our Valuable Features"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur."
        />
        <div className="grid grid-cols-3 gap-16">
          {feature_list.map((Ft, idx) => (
            <Feature key={idx} Icon={Ft.Icon} title={Ft.title} text={Ft.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="bg-slate-100 py-36">
      <div className="w-8/12 mx-auto">
        <ContentHeader
          title="Blog Posts"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur."
        />
        <div className="grid grid-cols-3 gap-10">
          <Loader01 />
          <Loader01 />
          <Loader01 />
          <Loader02 />
          <Loader02 />
          <Loader02 />
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="bg-white py-24 border-t">
      <div className="w-8/12 mx-auto">
        <div className="flex justify-between">
          <FooterItem
            title="Company"
            items={["Who We Are", "Contact Us", "Support"]}
          />
          <FooterItem
            title="Business"
            items={["Claim Business", "Advertise"]}
          />
          <FooterItem
            title="Company"
            items={[
              "Who We Are",
              "Contact Us",
              "Support",
              "Privacy Policy",
              "Terms & Conditions",
            ]}
          />
          <div>
            <p className="uppercase font-bold mb-2 text-gray-600">Follow Us</p>
            <div className="flex gap-2">
              <IconItem Icon={FaFacebookSquare} />
              <IconItem Icon={FaTelegram} />
              <IconItem Icon={GrTwitter} />
              <IconItem Icon={GrInstagram} />
            </div>
          </div>
        </div>
        <div className="pt-12">
          <p className="text-gray-600 text-sm">
            2021 &#169; Tail List. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
