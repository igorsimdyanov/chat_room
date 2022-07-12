import consumer from "./consumer"

const chatRoomChannel = consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    console.log('Connected to the chat room');
  },

  disconnected() {
    console.log('Disconnected to the chat room');
  },

  received(data) {
    $('#messages').append('<p class="message">' + data.message + '</p>')
  },

  speak(message) {
    this.perform('speak', { message: message })
  }
});

export default chatRoomChannel;
