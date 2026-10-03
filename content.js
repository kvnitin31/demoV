// All invitation content lives here. Edit this file only; markup and motion read from it.
// Every value marked TODO is a sample placeholder — replace it with the real detail.
export default {
  bride: 'Pragya', // TODO
  groom: 'Nitin', // TODO
  heroDateText: 'Thursday, 10 December 2026', // TODO
  city: 'Ghaziabad, Uttar Pradesh', // TODO
  countdownTarget: '2026-12-12T19:30:00+05:30', // TODO (ISO date-time with offset)
  invocation: 'ॐ श्री गणेशाय नमः',

  overlay: {
    invite: 'You are cordially invited',
    button: 'Open Invitation',
  },
  hero: { tagline: 'are getting married' },

  families: {
    invocation: '॥ श्री गणेशाय नमः ॥',
    blessingLine: 'With the blessings of our elders and the grace of the almighty,',
    bride: { label: 'Daughter of', parents: 'Mrs. Archana & Mr. Rajeev Nandan Prasad', grandparents: 'granddaughter of late Smt. Chintamani' }, // TODO
    groom: { label: 'Son of', parents: 'Mrs. Babita & Mr. Karamveer Singh', grandparents: 'grandson of Shri Harish Malhotra' }, // TODO
    request: 'request the honour of your gracious presence as their children wed',
    closing: 'Your blessings are the most treasured gift.',
  },

  celebrations: {
    eyebrow: 'Save the dates',
    title: 'The Celebrations',
    subtitle: 'Four days of colour, music and blessings',
  },

  // Order and count of the pinned scenes come from this array.
  // mapUrl: paste the "Share → Copy link" URL from Google Maps. address is optional (used in the Venues list).
  events: [
    {
      key: 'mehendi', name: 'Mehendi', date: 'Tuesday, 8 December', time: '7:00 PM onwards', // TODO
      venue: 'Abharam Retreats', area: 'Ghaziabad, Uttar Pradesh', address: 'Fly Over Bridge 70, Ghaziabad 201002', // TODO
      mapUrl: 'https://maps.app.goo.gl/U6L3eCMyP6LLxP9J6', // TODO
      dress: 'Shades of green', note: 'Henna, folk songs and a long lazy lunch.', art: 'scene-mehndi', // TODO note
    },
    {
      key: 'haldi', name: 'Haldi', date: 'Wednesday, 9 December', time: '10:00 AM onwards', // TODO
      venue: 'Abharam Retreats', area: 'Ghaziabad, Uttar Pradesh', address: 'Fly Over Bridge 70, Ghaziabad 201002', // TODO
      mapUrl: 'https://maps.app.goo.gl/U6L3eCMyP6LLxP9J6', // TODO
      dress: 'Yellow', note: 'Expect turmeric everywhere — white is a brave choice.', art: 'scene-haldi', // TODO note
    },
    {
      key: 'engagement', name: 'Engagement', date: 'Wednesday, 9 December', time: '7:00 PM onwards', // TODO
      venue: 'Abharam Retreats', area: 'Ghaziabad, Uttar Pradesh', address: 'Fly Over Bridge 70, Ghaziabad 201002', // TODO
      mapUrl: 'https://maps.app.goo.gl/U6L3eCMyP6LLxP9J6', // TODO
      dress: 'Pastels / rose gold', note: 'Rings, toasts and dancing under the lamps.', art: 'scene-sangeet', // TODO note
    },
    {
      key: 'wedding', name: 'Wedding', date: 'Thursday, 10 December', time: 'Baraat 7 PM · Pheras 11:30 PM', // TODO
      venue: 'Queens Lawn, Vedanta Farm', area: 'Delhi-Meerut Expy, near AKG College', address: 'Vedanta Farm, Ghaziabad 201015', // TODO
      mapUrl: 'https://maps.app.goo.gl/4mXwMYbLWai4nRST6', // TODO
      dress: 'Your regal best', note: 'The baraat arrives at dusk; vows around the sacred fire.', art: 'scene-mandap', // TODO note
    },
  ],

  story: {
    enabled: false,
    eyebrow: 'A journey of two hearts',
    title: 'Our Story',
    subtitle: 'How two families became one',
    items: [ /* { year: '2019', title: 'First met', text: '…', img: 'story-1.webp' }  (img lives in public/photos/) */ ],
  },

  gallery: {
    enabled: true,
    eyebrow: 'From our album',
    title: 'Captured Moments',
    subtitle: 'A few of our favourite frames',
    // Each item uses either `art` (a painting in public/art/) or `img` (a photo in public/photos/).
    items: [
      { art: 'scene-mehndi', caption: 'The mehendi afternoon' },
      { art: 'scene-haldi', caption: 'Turmeric and laughter' },
      { art: 'scene-sangeet', caption: 'Dancing till the stars came out' },
      { art: 'scene-mandap', caption: 'Around the sacred fire' },
      { art: 'scene-reception', caption: 'An evening in the palace hall' },
    ],
  },

  details: {
    enabled: true,
    eyebrow: 'For our guests',
    title: 'Things to Know',
    hashtag: '#PragyaWedsNitin', // TODO or null
    hashtagNote: 'Tag your photos and stories so we never miss a moment.',
    items: [ // TODO
      { icon: 'cloud-sun', title: 'Weather', text: 'December in Ghaziabad is sunny by day and chilly after dark. Carry a shawl for the evenings.' },
      { icon: 'bed-double', title: 'Where to Stay', text: 'Rooms are held near the venues for outstation guests. Call the family numbers below for details.' },
      { icon: 'car', title: 'Getting There', text: 'Every event card has a Google Maps link. Parking is available at all venues.' },
      { icon: 'shirt', title: 'Dress Code', text: 'Indian festive. Greens for Mehendi, yellows for Haldi, pastels for the Engagement and your regal best for the Wedding.' },
    ],
  },

  venues: {
    enabled: true,
    eyebrow: 'Finding your way',
    title: 'The Venues',
  },

  countdown: {
    title: 'The countdown begins',
    doneText: 'Just married',
  },

  music: { enabled: false, src: 'audio/shehnai.mp3' }, // file goes in public/audio/

  footer: {
    families: 'The Prasad & Singh Families', // TODO
    line: 'With love, laughter and the blessings of our elders',
    contacts: [ // TODO
      { name: 'Rishabh Anand', phone: '+91 7588212764' },
      { name: 'Arun Kumar', phone: '+91 9718673847' },
    ],
  },

  meta: {
    title: 'PragyaWedsNitin', // TODO
    description: 'You are cordially invited — 10 December 2026 · Ghaziabad.', // TODO
    siteUrl: 'https://rishabhanand04.github.io/wedding-invitation/', // must end with /
    ogImage: 'og.jpg',
  },
};
