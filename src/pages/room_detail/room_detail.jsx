import React, { useState, useEffect } from 'react';

const RoomDetail = ({ match }) => {
  const [room, setRoom] = useState({});

  useEffect(() => {
    fetch(`api/v1/room/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setRoom(data);
      });
  }, [match.params.id]);

  return (
    <div>
      <h2>Room Details</h2>
      <p>Name: {room.name}</p>
      <p>Address: {room.address}</p>
      <p>Description: {room.description}</p>
    </div>
  );
}

export default RoomDetail;
