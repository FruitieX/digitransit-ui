import mergeWith from 'lodash/mergeWith';

const CONFIG = process.env.CONFIG || 'turku';
const APP_TITLE = 'Fölin reittiopas';
const APP_DESCRIPTION =
  'Fölin reittiopas uudistuu. Tule mukaan! Ota uuden uuden sukupolven matkaopas käyttöösi.';

const walttiConfig = require('./waltti').default;

export default mergeWith({}, walttiConfig, {
  CONFIG,

  feedIds: ['FOLI'],

  searchParams: {
    'boundary.rect.min_lat': 59.963388,
    'boundary.rect.max_lat': 60.950777,
    'boundary.rect.min_lon': 21.145557,
    'boundary.rect.max_lon': 22.939795,
  },

  colors: {
    primary: '#e8aa27',
  },

  appBarLink: { name: 'Föli', href: 'http://www.foli.fi/fi' },

  socialMedia: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,

    twitter: {
      site: '@Turkukaupunki',
    },
  },

  meta: {
    description: APP_DESCRIPTION,
  },

  title: APP_TITLE,

  transportModes: {
    ferry: {
      availableForSelection: true,
      defaultValue: true,
    },
  },

  areaPolygon: [
    [21.145557, 59.963388],
    [21.145557, 60.950777],
    [22.939795, 60.950777],
    [22.939795, 59.963388],
  ],

  footer: {
    content: [
      { label: (function () { return `© Turun seudun joukkoliikenne ${(1900 + new Date().getYear())}`; }()) },
      {},
      { name: 'footer-feedback', nameEn: 'Submit feedback', type: 'feedback', icon: 'icon-icon_speech-bubble' },
      { name: 'about-this-service', nameEn: 'About this service', route: '/tietoja-palvelusta', icon: 'icon-icon_info' },
    ],
  },

  defaultEndpoint: {
    address: 'Kauppatori, Turku',
    lat: 60.451159,
    lon: 22.267633,
  },

  defaultOrigins: [
    { icon: 'icon-icon_bus', label: 'Kauppatori, Turku', lat: 60.451159, lon: 22.267633 },
    { icon: 'icon-icon_rail', label: 'Rautatieasema, Turku', lat: 60.453537, lon: 22.253379 },
    { icon: 'icon-icon_airplane', label: 'Lentoasema, Turku', lat: 60.511092, lon: 22.274211 },
  ],

  aboutThisService: {
    fi: {
      about: 'Kuuden kunnan yhdessä järjestämä joukkoliikenne Turun seudulla alkoi 1.7.2014. Turun seudun joukkoliikenteessä eli Fölissä ovat mukana Turku, Kaarina, Raisio, Naantali, Lieto ja Rusko. Seudullisen joukkoliikenteen alkamisen myötä joukkoliikenteen käyttö on helppoa ja edullista riippumatta kuntarajoista.',
      digitransit: 'Digitransit palvelualusta on HSL:n ja Liikenneviraston kehittämä avoimen lähdekoodin reititystuote. Lähdekoodi tarjotaan EUPL v1.2 ja AGPLv3 lisensseillä.',
      datasources: 'Kartat, kadut, rakennukset, pysäkkisijainnit ym. tiedot tarjoaa © OpenStreetMap contributors ja ne ladataan Geofabrik palvelusta. Osoitetiedot tuodaan VRK:n rakennustietorekisteristä ja ne ladataan OpenAddresses-palvelusta. Joukkoliikenteen reitit ja aikataulut ladataan HSL:n dev.hsl.fi/gtfs palvelimelta.',
    },

    sv: {
      about: 'Kollektivtrafiken i Åboregionen inleds den 1 juli 2014 och ordnas samfällt av sex kommuner. Åbo, S:t Karins, Reso, Nådendal, Lundo och Rusko deltar i Föli, dvs. kollektivtrafiken i Åboregionen. När den regionala kollektivtrafiken startar blir det lätt och förmånligt att använda kollektivtrafiken i regionen kring Åbo stad oberoende av kommungränserna.',
      digitransit: 'Digitransit-plattformen är en öppen programvara utvecklad av HRT och Trafikverket, som bl.a. stödjer sig på OpenTripPlanner. Källkoden distribueras under EUPL v1.2 och AGPLv3 licenserna.',
      datasources: 'Kartor, gator, byggnader, hållplatser och dylik information erbjuds av © OpenStreetMap contributors och laddas ned från Geofabrik-tjänsten. Addressinformation hämtas från BRC:s byggnadsinformationsregister och laddas ned från OpenAddresses-tjänsten. Kollektivtrafikens rutter och tidtabeller hämtas bl.a. från Trafikverkets landsomfattande kollektivtrafiksdatabas.',
    },

    en: {
      about: 'Public transport organised jointly between six municipalities in the Turku region will start on 1 July 2014. Turku region public transport, under the name of Föli, is a collaboration between Turku, Kaarina, Raisio, Naantali, Lieto, and Rusko. With regional public transport, using the public transport system in Turku city region will be easy and inexpensive, regardless of municipal borders. Public transport service points will be introduced in each of the six municipalities. You can use any of the service points.',
      digitransit: 'Digitransit service platform is created by HSL Finnish Transport Agency. The source code of the platform is dual-licensed under the EUPL v1.2 and AGPLv3 licenses.',
      datasources: "Maps, streets, buildings, stop locations etc. from © OpenStreetMap contributors downloaded from Geofabrik. Additional address data from Finland's Population Register Centre downloaded from OpenAddresses Public transport routes and timetables from HSL downloaded from dev.hsl.fi/gtfs.",
    },
  },

  staticMessages: [],

}, (objValue, srcValue) => {
  if (Array.isArray(srcValue)) { return srcValue; }
  if (Array.isArray(objValue)) { return objValue; }
  return undefined; // default merge
});
