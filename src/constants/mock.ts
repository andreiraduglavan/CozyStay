import barnhaus1 from '../../assets/mock/BarnHaus-1.webp'
import barnhaus2 from '../../assets/mock/BarnHaus-2.webp'
import barnhaus3 from '../../assets/mock/BarnHaus-3.webp'
import barnhaus4 from '../../assets/mock/BarnHaus-4.jpeg'
import barnhaus5 from '../../assets/mock/BarnHaus-5.jpeg'

export const mockProperties = [
  {
    name: 'BarnHaus',
    images: [
      barnhaus1,
      barnhaus2,
      barnhaus3,
      barnhaus4,
      barnhaus5
    ],
    location: 'Jibert, Brașov',
    about: 'A spacious, warm and cozy 5 bedroom Saxon house with a barn, situated on the idyllic hills of the Jibert Village few minutes away from the famous Viscri and the Rupea fortress. This place is perfect for those who love Saxon villages and nature walks. The house has been completely remodelled in 2021 and comes with everything you need for a short stay. So, welcome to “BarnHaus”!',
    propertyFeatures: [
      {
        icon: 'guest',
        title: '12 guests'
      },
      {
        icon: 'bedroom',
        title: '5 bedroms'
      },
      {
        icon: 'bathroom',
        title: '3 bathrooms'
      },
      {
        icon: 'wc',
        title: '1 wc'
      },
      {
        icon: 'largeLivingroom',
        title: '1 LARGE LIVINGROOM ( 140 m² )'
      },
      {
        icon: 'kitchen',
        title: '1 kitchen'
      }
    ],
    faq: [
      {
        question: 'Guest access',
        answear: 'The guests will have whole house to themseleves.'
      },
      {
        question: 'Interaction with guests',
        answear: 'We are offsite, but available by phone and emails for questions.'
      }
    ],
    amenities: [
      {
        category: 'Entertainment',
        icon: 'wi-fi',
        title: 'Wireless internet'
      },
      {
        category: 'Entertainment',
        icon: 'bluetoothSound',
        title: 'Bluetooth sound system',
      },
      {
        category: 'Heating and cooling',
        icon: 'indoorFireplace',
        title: 'Indoor fireplace'
      },
      {
        category: 'Heating and cooling',
        icon: 'electricHeating',
        title: 'Electric heating'
      },
      {
        category: 'Heating and cooling',
        icon: 'electricHeating',
        title: 'Electric heating'
      },
      {
        category: 'Kitchen',
        icon: 'kitchen',
        title: 'Fully equiped kitchen'
      },
      {
        category: 'Family',
        icon: 'babyBedChair',
        title: 'Baby bed & chair'
      },
      {
        category: 'Entertainment',
        icon: 'homeCinema',
        title: 'Home Cinema'
      },
      {
        category: 'Outdoor',
        icon: 'outdoorGrill',
        title: 'Outdoor Grill'
      }
    ],
    locationCoordinates: {
      latitude: 46.005235644434556,
      longitude: 25.070512869201764
    },
    gettingAround: "This place it's far from any public transportation and can only be accessed by car.",
    nearby: [
      {
        mapIcon: 'icon',
        title: 'Viscri  Village',
        description: 'UNESCO Heritage - 10 min away',
        coordinates: {
          latitude: 46.056397729271126, 
          longitude: 25.094811576668405,
        }
      }
    ],
    housePlanImages: [
      'image 1',
      'image 1',
      'image 1',
      'image 1',
    ],
  }
]