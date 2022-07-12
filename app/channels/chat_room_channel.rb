class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_room'
  end

  def speak(data)
    ActionCable.server.broadcast 'chat_room', { message: data['message'] }
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
