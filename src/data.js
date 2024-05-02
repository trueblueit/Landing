/**
 * This file contains data for the app
 * It is seperated from the app code to make it easy
 * to work with and manage data.
 *
 * It exports the data as constants that can be imported
 * into the app code.
 */

/* imporrt for NabItems*/
import {
  FaHome,
  FaStar,
  FaUser,
  FaEnvelope,
  FaCog,
  FaBed,
} from "react-icons/fa";

// our values data in home page
export const values = [
  {
    id: 1,
    icon: "fa fa-heartbeat",
    name: "PASSION",
    description:
      "We have a passion to work to our work ethics. Every member of staff is passionate about their work and takes the participant as part of the family.",
  },
  {
    id: 2,
    icon: "fa fa-users",
    name: "SAFE AND HARMONIOUS WORKING ENVIRONMENT",
    description:
      "We offer a workplace that provides support, guidence and acceptance to staff and participants.",
  },
  {
    id: 3,
    icon: "fa fa-gratipay",
    name: "RESEPCT",
    description: "We respect people's decisions, opinions and views.",
  },
  {
    id: 4,
    icon: "fa fa-slideshare",
    name: "HONESTY",
    description:
      "We are trustworthy and tell the truth to keep our promises to you. ",
  },
  {
    id: 5,
    icon: "fa fa-search",
    name: "PRIVACY AND CONFIDENTIALITY",
    description:
      "This is of utmost importance as outlined in our Privacy and Confidentiality Policy and procedures.",
  },
];

//services page data in our services (home page)
export const services = [
  {
    title: "DAILY ACTIVITIES & IMPROVED LIVING CHOICE",
    icon: "fa fa-rocket",
    mylink: "/DAILYACTIVITIES&IMPROVEDLIVINGCHOICE",
    description:
      "We are excellent in providing all home-bound personal and self-care support as well as community access supports to assist you in visiting family and friends or participating in daily scheduled or innovative activities or social events.",
  },
  {
    title: "ASSISTANCE WITH SOCIAL AND COMMUNITY PARTICIPATION",
    icon: "fa fa-comments",
    mylink: "/ASSISTANCEWITHSOCIALANDCOMMUNITYPARTICIPATION",
    description:
      "Our wide range of non-clinical capacity-building services includes social skills, employment, life skills, and tenancy support. As part of our person-centered recovery approach.",
  },
  {
    title: "ACCOMMODATION SUPPORT",
    icon: "fa fa-home",
    mylink: "/ACCOMMODATIONSUPPORT",
    description:
      "Funding for Accommodation Supports generally comes from the Core funding section of your NDIS plan and is usually pre-planned with the agency when your plan is established or reviewed.",
  },
  {
    title: "SUPPORTS IN EMPLOYMENT",
    icon: "fa fa-briefcase",
    mylink: "/SUPPORTSINEMPLOYMENT",
    description:
      "Funding for support in employment is in the Core budget of a participant’s plan under the support category Assistance with Social Economic and Community Participation. The NDIS also funds capacity building employment supports.",
  },
  {
    title: "SUPPORTED INDEPENDENT LIVING (SIL)",
    icon: "fa fa-key",
    mylink: "/SUPPORTEDINDEPENDENTLIVING",
    description:
      "In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey.",
  },
  {
    title: "SCHOOL LEAVER EMPLOYMENT SUPPORTS (SLES)",
    icon: "fa fa-graduation-cap",
    mylink: "/SCHOOLLEAVEREMPLOYMENTSUPPORTS",
    description:
      "A SLES is an NDIS support available to students leaving secondary school that helps them on a pathway to employment.",
  },
];

//gallery data in about us (gallary.js)
export const images = [
  { id: 1, img: "assets/lifeisok/1.jpeg" },
  {
    id: 2,
    img: "assets/lifeisok/about.jpeg",
  },
  { id: 3, img: "assets/lifeisok/aboutus.jpeg" },
];

// housing service
export const accordionData = [
  {
    title: "Supported independent living (SIL)",
    imgSrc: [
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/2.jpg",
    ],
    content:
      " In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey, strengthening you to build your independence, and reaching your goals. Our long-term basis SIL services are available in Palmerston and in Darwin.",
  },
  {
    title: "Short Term Accommodation (STA)",
    imgSrc: [
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/2.jpg",
    ],
    content:
      "Our STA offers a safe place for you to experience time away from your normal place of residence. While at STA, you will experience a personalized service which will accommodate all your needs, including appointments, social outings, family and friend visits, day-to-day living, self-care support, and planning for psychosocial recovery and NDIS. For a period of up to 14 days, we provide STA at shared residential sites across Darwin.",
  },
  {
    title: "Medium term accommodation (MTA)",
    imgSrc: [
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/5.jpg",
      ".././assets/lifeisok/house/6.jpg",
    ],
    content:
      "NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections). Throughout your recovery journey, our residential staff will provide you with support and guidance so that you can move into more permanent accommodations and support your psychosocial recovery goal. For a period of up to 90 days, we provide MTA at shared residential locations throughout Darwin.",
  },
];
// accommodationData
export const accommodations = [
  {
    name: "Support indepedent Living(SIL)",
    description:
      " In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey, strengthening you to build your independence, and reaching your goals. Our long-term basis SIL services are available in Palmerston and in Darwin.",
    bedrooms: 4,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg", // Additional images
      ".././assets/lifeisok/house/5.jpg",
    ],
  },
  {
    name: "Short Term Accommodation (STA)",
    description:
      "Our STA offers a safe place for you to experience time away from your normal place of residence. While at STA, you will experience a personalized service which will accommodate all your needs, including appointments, social outings, family and friend visits, day-to-day living, self-care support, and planning for psychosocial recovery and NDIS. For a period of up to 14 days, we provide STA at shared residential sites across Darwin.",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/2.jpg",
      ".././assets/lifeisok/house/4.jpg",
      ".././assets/lifeisok/house/6.jpg",
    ],
  },
  {
    name: "Medium term accommodation (MTA)",
    description:
      "NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections). Throughout your recovery journey, our residential staff will provide you with support and guidance so that you can move into more permanent accommodations and support your psychosocial recovery goal. For a period of up to 90 days, we provide MTA at shared residential locations throughout Darwin.",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    imgSrc: [
      ".././assets/lifeisok/house/3.jpg",
      ".././assets/lifeisok/house/1.jpg",
      ".././assets/lifeisok/house/3.jpg",
    ],
  },

  // Add more accommodations as needed
];

export const navItems = [
  {
    id: 1,
    link: "/#home",
    idnm: "home",
    navheading: "Home",
    icon: FaHome,
  },
  {
    id: 2,
    link: "/#features",
    idnm: "features",
    navheading: "Features",
    icon: FaStar,
  },
  {
    id: 3,
    idnm: "services",
    navheading: "Services",
    icon: FaCog,
    submenu: [
      {
        id: 7,
        link: "/DAILYACTIVITIES&IMPROVEDLIVINGCHOICE",
        idnm: "service1",
        navheading: "Daily Activities & Improved Living Choice",
      },
      {
        id: 8,
        link: "/ASSISTANCEWITHSOCIALANDCOMMUNITYPARTICIPATION",
        idnm: "service2",
        navheading: "Assistance With Social And Community Participation",
      },
      {
        id: 9,
        link: "/ACCOMMODATIONSUPPORT",
        idnm: "service3",
        navheading: "Accommodation Support",
      },
      {
        id: 10,
        link: "/SUPPORTSINEMPLOYMENT",
        idnm: "service4",
        navheading: "Supports in Employment",
      },
      {
        id: 11,
        link: "/SUPPORTEDINDEPENDENTLIVING",
        idnm: "service5",
        navheading: "Supported Independent Living (SIL)",
      },
      {
        id: 12,
        link: "/SCHOOLLEAVEREMPLOYMENTSUPPORTS",
        idnm: "service6",
        navheading: "School Leaver Employment Supports (SLES)",
      },
    ],
    isOpen: false,
  },
  {
    id: 4,
    link: "/about",
    idnm: "about",
    navheading: "About Us",
    icon: FaUser,
  },
  {
    id: 5,
    link: "/#accomodation",
    idnm: "accomodation",
    navheading: "Accomodation",
    icon: FaBed,
  },
  {
    id: 6,
    navheading: "Contact Us",
    icon: FaEnvelope,
    submenu: [
      { id: 14, navheading: "Referals", link: "/referral" },
      { id: 15, navheading: "Enquiry", link: "/enquire" },
      { id: 16, navheading: "Career", link: "/#career" },
      { id: 17, navheading: "Feedback", link: "/#feedback" },
    ],
    isOpen: false,
  },
];
