let config = {
  API_BASE_URL_EXTERNAL: process.env.API_BASE_URL_EXTERNAL ||
    'http://localhost:3010/api/v1'
  , API_BASE_URL_INTERNAL: process.env.API_BASE_URL_INTERNAL ||
    'http://localhost:3000' 
  , 'facebookAuth' : {
    'clientID'      : '1670549016518238',
    'clientSecret'  : '1e316d828f0768d6c76311331101dcfc'
  }
  , 'googleAuth' : {
    'clientID'      : '436181537831-9ugtk79mnmun66d8rcjp8m6grkk4llbr.apps.googleusercontent.com',
    'clientSecret'  : 'qbi4ZkYRPGduZ8x45XfE5NWZ'
  }
  , 'tagPath' : '/arquivo/tag'
  , 'tagDetailPath' : '/arquivo'
  , 'downloadPath' : '/download'
}
export default config;
