/**
 * This file contains data for the app
 * It is seperated from the app code to make it easy
 * to work with and manage data.
 *
 * It exports the data as constants that can be imported
 * into the app code.
 */

// accommodationData
export const houses = [
  {
    name: "Image-1",
    imag: "assets/lifeisok/house/1.jpg",
  },
  {
    name: "Image-2",
    imag: "assets/lifeisok/house/2.jpg",
  },
  {
    name: "Image-3",
    imag: "assets/lifeisok/house/3.jpg",
  },
  {
    name: "Image-4",
    imag: "assets/lifeisok/house/4.jpg",
  },
  {
    name: "Image-5",
    imag: "assets/lifeisok/house/5.jpg",
  },
  {
    name: "Image-6",
    imag: "assets/lifeisok/house/6.jpg",
  },
];

export const house1 =
  "Location: Heart of Darwin City \n3 bedroom Modal \n2 Bathroom \n2 Car Park Space";
export const house =
  "Location: Stuart Park \n2 bedroom Modal \n1 Bathroom \n1 Car Park Space\nNote:- No Pet allowed";
// our values
export const values = [
  {
    id: 1,
    img: "assets/images/icons/1.png",
    name: "COMPASSION",
    description:
      "We offer support from our desire to help individuals and emphasize on the operational environment is less stressful and more satisfying.",
  },
  {
    id: 2,
    img: "assets/images/icons/2.png",
    name: "TOGETHERNESS/INTEGRITY",
    description:
      "We cement our relationship by encouraging each other to strive together, feel safe and belong to a group.",
  },
  {
    id: 3,
    img: "assets/images/icons/3.png",
    name: "RESEPCT",
    description:
      "We recognise individual rights and dignity. We do care about the diversity and social cohesion/inclusion.",
  },
  {
    id: 4,
    img: "assets/images/icons/4.png",
    name: "TRUST",
    description:
      "We trust our ability to contribute to a positive change. We thrive to achieve the best potential of individual.",
  },
  {
    id: 5,
    img: "assets/images/icons/5.png",
    name: "EXPLORE",
    description:
      "To grow in an everyday changing environment, we keep questioning and challenging ourselves and the status quo.",
  },
];

//services
export const services = [
  {
    title: "Core Outreach Support",
    icon: "pe-7s-diamond",
    mylink: "/service1",
    description:
      "Offering round-the-clock support for personal care and community engagement to enhance the independence of home-bound individuals.",
  },
  {
    title: "Capacity Building Outreach Supports",
    icon: "pe-7s-chat ",
    mylink: "/service2",
    description:
      "Empowering you with social, employment, and life skills development for a holistic person-centred recovery journey.",
  },
  {
    title: "ACCOMMODATION SUPPORT",
    icon: "pe-7s-home",
    mylink: "/service3",
    description:
      "Providing safe, supportive living solutions, from long-term SIL to temporary STA, tailored to your needs.",
  },
  {
    title: "Support Coordination",
    icon: "pe-7s-paper-plane",
    mylink: "/service4",
    description:
      "Exceptional support coordination in Darwin, fostering open communication and tailored assistance to enrich your life.",
  },
  {
    title: "Supports in Employment",
    icon: "pe-7s-clock",
    mylink: "/service5",
    description:
      "Extensive employment support focusing on personal and professional growth, including SLES, to ensure successful career paths.",
  },
  {
    title: "House Cleaning and Maintenance",
    icon: "pe-7s-tools",
    mylink: "/service3",
    description:
      "Expert cleaning and maintenance services to keep your living spaces pristine and well-maintained, ensuring comfort and peace of mind.",
  },
];

//gallery
export const images = [
  { id: 1, img: "assets/lifeisok/1.jpeg" },
  {
    id: 2,
    img: "assets/lifeisok/about.jpeg",
  },
  { id: 3, img: "assets/lifeisok/aboutus.jpeg" },
  { id: 4, img: "assets/lifeisok/3.jpeg" },
  { id: 5, img: "assets/lifeisok/1.jpeg" },
  { id: 6, img: "assets/lifeisok/aboutus.jpeg" },
];

export const servicesDetail = [
  {
    name: "Core Outreach Support",
    description:
      " We are excellent in providing all home-bound personal and self-care support as well as community access supports to assist you in visiting family and friends or participating in daily scheduled or innovative activities or social events in the community. Your core funding section of your NDIS plan enable you to get the core outreach support. Supports for you will be available 24 hours a day, 7 days a week. These supports are currently available in the Greater Darwin regions.",
    imag: "assets/lifeisok/supports.jpg",
  },
  {
    name: "Capacity Building Outreach Supports",
    description:
      "Our wide range of non-clinical capacity-building services includes social skills, employment, life skills, and tenancy support. As part of our person-centered recovery approach, we also provide life transition planning, mentoring, and peer support. These supports for you are available 7 days a weekCreative designer with a keen eye for detail.",
    imag: "assets/lifeisok/sil.jpg",
  },
  {
    name: "Accommodation Supports",
    description: "",
  },
  {
    name: "Support Coordination",
    description:
      "We’re dedicated to providing exceptional NDIS Support Coordination services in Darwin, NT, Australia. Our experienced and professional team believes in open communication and breaking barriers as a small provider. We’re on a mission to enrich lives, and we’re here to make it happen.",
    imag: "assets/lifeisok/daily.jpg",
  },
  {
    name: "Supports in Employment",
    description:
      "As a registered NDIS provider of Supports in employment, we offer a comprehensive range of services to assist participants in their employment journey. This includes providing support beyond the requirements of traditional employment services and employers, ensuring that participants receive the necessary assistance for success. Our services cover a spectrum of needs, including personal care, transportation assistance, assistive technology, and more, tailored to each participant's specific requirements irrespective of the activity they are engaged in. Additionally, we actively engage in building relationships with mainstream providers and the local community to enhance our understanding of the employment needs of people with disabilities. Funding for our employment support services is allocated in the Core budget of a participant’s NDIS plan under the support category 'Assistance with Social Economic and Community Participation.' Moreover, we provide capacity-building employment supports, such as employment-related assessments and counseling, workplace assistance, and School Leaver Employment Supports (SLES). Our commitment is to contribute to the overall well-being and inclusivity of individuals with disabilities in the workforce.",
    imag: "assets/lifeisok/mta.jpg",
  },
];

// housing service
export const accordionData = [
  {
    title: "Supported independent living (SIL)",
    content:
      " In our SIL, you will find a safe, comfortable, and supportive living environment, where all your everyday needs will be met. You will receive person-centred care from our SIL team; they will assist you in planning your recovery journey, strengthening you to build your independence, and reaching your goals. Our long-term basis SIL services are available in Palmerston and in Darwin.",
  },
  {
    title: "Short Term Accommodation (STA)",
    content:
      "Our STA offers a safe place for you to experience time away from your normal place of residence. While at STA, you will experience a personalized service which will accommodate all your needs, including appointments, social outings, family and friend visits, day-to-day living, self-care support, and planning for psychosocial recovery and NDIS. For a period of up to 14 days, we provide STA at shared residential sites across Darwin.",
  },
  {
    title: "Medium term accommodation (MTA)",
    content:
      "NDIS participants can stay at our MTA during a transitional period (such as when leaving the hospital or released from Corrections). Throughout your recovery journey, our residential staff will provide you with support and guidance so that you can move into more permanent accommodations and support your psychosocial recovery goal. For a period of up to 90 days, we provide MTA at shared residential locations throughout Darwin.",
  },
];
