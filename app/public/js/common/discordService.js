/**
 * Discord RPC integration 
 */

"use strict";

app.service('discordService', function ($rootScope) {


  this.updatePresence = function (user, songName, playerStatus) {

    $rootScope.rpcClient.setActivity({
      details: songName,
      state: "From " + user + "'s profile",
      largeImageKey: "soundcloud_icon",
      largeImageText: "SoundCloud",
      smallImageKey: playerStatus ? "play_icon" : "pause_icon",
      smallImageText: playerStatus ? "Playing" : "Paused",
      instance: false
    });

  };
  
  this.startUp = function () {

    $rootScope.rpcClient.setActivity({
      details: "Idle",
      state: "Nothing playing",
      largeImageKey: "soundcloud_icon",
      largeImageText: "SoundCloud",
      smallImageKey: "stop_icon",
      smallImageText: "Idle",
      instance: false
    });

  };



});