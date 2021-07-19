window.addEventListener('load', function() {
  /*
  var jioOptions = {
    "gameName": "Birdy",
    "gameVersion": "1.2.7",
    "autoControl": ["volume", "exit"]
};

var jioSDK;
if (window.Jiogames) {
    jioSDK = new window.Jiogames(jioOptions);
}
   */
  var jioOptions = {
    "gameName": "Birdy",
    "gameVersion": "1.2.7",
    "autoControl": ["volume", "exit"]
  };
  var jioSDK = new Jiogames(jioOptions);
  console.log('.............................................');
  console.log(jioSDK);
  window.jio_SDK = jioSDK;
  var userdata = jioSDK.getVmaxUserData();
  if (userdata != null) {
    console.log("userdata ", userdata);
    window.advid = userdata.idfa ? userdata.idfa : "";
    window.uid = userdata.bpid ? userdata.bpid : "";
    window.advid = '0735043d-42a1-4108-828d-e5bc4f707807';
    window.uid = '5090436833';
  } else {
    console.log('............debugger:can not get userdata!!!');
    window.advid = '0735043d-42a1-4108-828d-e5bc4f707807';
    window.uid = '5090436833';
  }
})
