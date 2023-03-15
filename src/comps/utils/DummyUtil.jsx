import React from "react";

import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { BsFileBarGraphFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { MdLocalFireDepartment } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { HiChip } from "react-icons/hi";
import { RiLoginBoxLine } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";

export const CustomLiIcon = ({ Icon = null, content }) => (
  <li className="capitalize">
    <a href="#" className="hover:text-amber-500 flex items-center gap-2">
      {!!Icon && <Icon />} <span>{content}</span>
    </a>
  </li>
);

export const CustomInput = ({ label }) => (
  <div>
    <input
      type="text"
      placeholder={label}
      className="rounded-md w-80 bg-white text-gray-600 py-2 px-4 focus:outline-none"
    />
  </div>
);

export const ContentHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <p className="text-4xl font-bold text-gray-600">{title}</p>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export const DiscoverMore = ({ content = "Discover More" }) => (
  <div className="text-center mt-12">
    <button className="rounded-md py-2.5 px-6 bg-white border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600">
      {content}
    </button>
  </div>
);

export const Place = (props) => {
  const { url, title, address, rating, tags = [] } = props;

  return (
    <div className="bg-white rounded-md shadow overflow-hidden hover:shadow-xl transition-all">
      <div className="h-48 overflow-hidden">
        <img src={url} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-4 space-y-2 relative">
        <div className="flex items-center text-sm text-amber-500 space-x-1">
          {[...Array(5).keys()].map((rt) =>
            rating >= rt + 1 ? (
              <BsStarFill key={rt} />
            ) : rating >= rt + 0.5 ? (
              <BsStarHalf key={rt} />
            ) : (
              <BsStar key={rt} />
            )
          )}
        </div>
        <p className="text-lg font-bold text-gray-600">{title}</p>
        <p className="text-sm text-gray-600 flex items-center space-x-1">
          <MdPlace className="text-md" />
          <span>{address}</span>
        </p>
        <div className="space-x-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-0 5 bg-amber-100 border border-amber-200 text-amber-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute right-3 bottom-3">
          <MdLocalFireDepartment className="text-red-600" />
        </div>
      </div>
    </div>
  );
};

export const Category = ({ url, content }) => (
  <a
    href="#"
    className="p-4 bg-white w-60 shadow space-y-5 rounded-lg hover:shadow-xl transition-all"
  >
    <img className="w-32 h-32 mx-auto rounded-full" src={url} alt={content} />
    <div className="space-y-2 text-center">
      <p className="text-gray-700 text-lg font-semibold mb-3">{content}</p>
    </div>
  </a>
);

export const Collection = ({ url, status, placeCount }) => {
  return (
    <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
      <img
        src={url}
        alt=""
        className="rounded w-full h-full object-cover shadow"
      />
      <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded" />
      <div className="absolute bottom-2 left-3">
        <p className="text-white text-lg font-semibold">{status}</p>
        <p className="text-white text-sm">{placeCount} Places</p>
      </div>
    </div>
  );
};

export const Team1stRow = ({ url, title, subtitle }) => (
  <div className="relative">
    <img
      src={url}
      alt=""
      className="w-48 h-60 object-cover rounded-md shadow-md"
    />
    <div className="bg-gradient-to-t from-black via-transparent absolute inset-0 rounded-md"></div>
    <div className="absolute bottom-2 left-3 text-white text-sm">
      <p className="font-semibold">{title}</p>
      <p>{subtitle}</p>
    </div>
  </div>
);

export const Feature = ({ Icon, title, text }) => (
  <div className="hover:bg-white hover:shadow-lg p-4 rounded-md transition-all">
    <button className="text-gray-600 bg-slate-100 p-2 rounded-md">
      <Icon />
    </button>
    <p className="text-xl font-bold mt-3 mb-2 text-gray-600">{title}</p>
    <p className="text-gray-500">{text}</p>
  </div>
);

export const Loader01 = () => (
  <div className="bg-white rounded-md shadow p-5 flex flex-col gap-5 justify-center items-center">
    <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
    <div className="space-y-2">
      <div className="mx-auto w-32 h-6 rounded-full bg-gray-200 animate-pulse shadow-sm"></div>
      <div className="space-y-1">
        <div className="mx-auto  w-52 h-5 rounded-full bg-gray-200 animate-pulse shadow-sm"></div>
        <div className="mx-auto  w-44 h-5 rounded-full bg-gray-200 animate-pulse shadow-sm"></div>
      </div>
      <div className="mx-auto  w-20 h-6 rounded-full bg-gray-200 animate-pulse shadow-sm"></div>
    </div>
  </div>
);

export const FooterItem = ({ title, items }) => (
  <div className="">
    <p className="uppercase font-bold mb-2 text-gray-600">{title}</p>
    <ul>
      {items.map((content, idx) => (
        <li key={idx} className="text-gray-600">
          {content}
        </li>
      ))}
    </ul>
  </div>
);

export const IconItem = ({ Icon }) => (
  <a href="#" className="text-lg">
    <Icon />
  </a>
);

export const Loader02 = () => (
  <div className="bg-white rounded-md shadow p-5 space-y-3">
    <div className="h-44 w-full bg-gray-200 animate-pulse rounded-lg"></div>
    <div className="space-y-3">
      <div className="w-8/12 h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
      <div className="space-y-1">
        <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
        <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
        <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
        <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
        <div className="w-7/12 h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex gap-2">
        <div className="w-16 h-5 rounded-full bg-gray-200 animate-pulse shadow"></div>
        <div className="w-12 h-5 rounded-full bg-gray-200 animate-pulse shadow"></div>
        <div className="w-20 h-5 rounded-full bg-gray-200 animate-pulse shadow"></div>
      </div>
    </div>
  </div>
);

export const feature_list = [
  {
    Icon: FaUserGraduate,
    title: "Unlimited Chats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
  {
    Icon: AiOutlineExperiment,
    title: "Multiple Agent",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
  {
    Icon: BsFileBarGraphFill,
    title: "Departments",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
  {
    Icon: HiChip,
    title: "Super Fast",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
  {
    Icon: RiLoginBoxLine,
    title: "Detail log",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
  {
    Icon: GrAnalytics,
    title: "Analytics",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Pariatur.",
  },
];

export const places = [
  {
    title: "Dr. Someone Clinic",
    rating: 3.5,
    address: "Somewhere, California",
    url: "/images/skynews-dentist-generic_5393494.jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Zee Mobile Repair",
    rating: 4.5,
    address: "Somewhere, California",
    url: "/images/mobile-repair.jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Grade Gym",
    rating: 3,
    address: "Somewhere, California",
    url: "/images/grade-gym.jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Mulu Burger House",
    rating: 3.7,
    address: "Somewhere, California",
    url: "/images/download.jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Bete Fashion & Beauty",
    rating: 2.2,
    address: "Somewhere, California",
    url: "/images/images (1).jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Our Friut Clinic",
    rating: 1.1,
    address: "Somewhere, California",
    url: "/images/hero/hero_1.jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },

  {
    title: "The Best Louche",
    rating: 3.9,
    address: "Somewhere, California",
    url: "/images/res-pic (3).jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Indian Traditional Food",
    rating: 4.5,
    address: "Somewhere, California",
    url: "/images/res-pic (6).jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
  {
    title: "Couples Dinner",
    rating: 3,
    address: "Somewhere, California",
    url: "/images/res-pic (7).jpg",
    tags: ["Clinic", "Hospital", "$$"],
  },
];

export const cat_list = [
  {
    content: "Coffee & Tea",
    url: "/images/icons/566024_coffee_cafe_cup_drink_espresso_icon.png",
  },
  {
    content: "Entertainment",
    url: "/images/icons/531911_camera_device_entertainment_film_media_icon.png",
  },
  {
    content: "Hotels & Travel",
    url: "/images/icons/hotel.png",
  },
  {
    content: "Health & Medical",
    url: "/images/icons/health.png",
  },
  {
    content: "Education",
    url: "/images/icons/school.png",
  },
  {
    content: "Automotive",
    url: "/images/icons/automotive.png",
  },
  {
    content: "Home Services",
    url: "/images/icons/home.png",
  },
  {
    content: "Shopping",
    url: "/images/icons/shopping.png",
  },
];

export const collection_list = [
  {
    url: "/images/dental 1.jpg",
    status: "Newly Opened",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (5).jpg",
    status: "Traditional Restaurants",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (1).jpg",
    status: "Trending This Week",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (2).jpg",
    status: "Luxury Houses",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (7).jpg",
    status: "Cheap In Town",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (4).jpg",
    status: "Trending This Week",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (6).jpg",
    status: "Cheap In Town",
    placeCount: 21,
  },
  {
    url: "/images/res-pic (3).jpg",
    status: "Trending This Week",
    placeCount: 21,
  },
];
