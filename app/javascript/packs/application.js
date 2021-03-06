// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import "channels"
import "jquery"
import chatRoomChannel from "channels/chat_room_channel"

Rails.start()
Turbolinks.start()

$(document).on('turbolinks:load', function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    let message = $('#message').val();
    if (message.length > 0) {
      chatRoomChannel.speak(message);
      $('#message').val('')
    }
  })
})
