import * as React from 'react';
import './style.css';

type Reservation = {
  name: string;
  seats: number;
  id?: number;
};

export default function App() {
  const [reservations, setReservations] = React.useState<Reservation[]>([]);
  const [reservName, setReservName] = React.useState(null);
  const [reservSeats, setReservSeats] = React.useState<number>(1);

  return (
    <div>
      <input
        type="text"
        value={reservName}
        onChange={(e) => setReservName(e.target.value)}
      />
      <input
        type="number"
        min={1}
        value={reservSeats}
        onChange={(e) => setReservSeats(Number(e.target.value))}
      />
      <button
        onClick={() => {
          setReservations([
            ...reservations,
            { name: reservName, seats: reservSeats },
          ]);
          setReservName(null);
          setReservSeats(1);
        }}
      >
        Add
      </button>

      <div>
        {reservations.map((reservation) => (
          <React.Fragment>
            <input value={reservation.name} />
            <input value={reservation.seats} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
