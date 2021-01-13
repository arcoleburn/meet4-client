

const  {Loader} = require('@googlemaps/js-api-loader')

const loader = new Loader({
  apiKey: process.env.GOOGLE_KEY,
  libraries: 'geometry',
});


loader.load().then(() => {
  const ptsArr = new google.maps.geometry.encoding.decodePath(
    'qmkwF|}gbMgBT]PCm@Eo@SmDQ}CEe@B?g@BaRda@kBxDS`@g@~@g@|@S^mNlZyMvY]dAsNhl@Ub@yEnGYr@ok@rqC[pAc@zAYhAERIRaNpp@yDrPCZ@p@FVJRNRRRxI`HPN`@Z`ExCqHhJsAgA_hAw|@a@Qa@MsVcD}IiAgAQqKgBg@Ig@GqE_@`CYj@kA'
  );
  console.log('pts arr', ptsArr)
}).catch(err=>console.log(err));
