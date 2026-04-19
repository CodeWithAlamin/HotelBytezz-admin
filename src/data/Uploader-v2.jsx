import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { rooms } from "./data-rooms";
import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";

// const originalSettings = {
//   minBookingLength: 3,
//   maxBookingLength: 30,
//   maxGuestsPerBooking: 10,
//   breakfastPrice: 15,
// };

const StyledUploader = styled.div`
  margin-top: auto;
  background-color: var(--color-silver-100);
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createBookings() {
  // Bookings need a guestId and a roomId. We can't tell Supabase IDs for each object, it will calculate them on its own. So it might be different for different people, especially after multiple uploads. Therefore, we need to first get all guestIds and roomIds, and then replace the original IDs in the booking data with the actual ones from the DB
  const { data: guestsIds } = await supabase
    .from("guests")
    .select("id")
    .order("id");
  const allGuestIds = guestsIds.map((room) => room.id);
  const { data: roomsIds } = await supabase
    .from("rooms")
    .select("id")
    .order("id");
  const allRoomIds = roomsIds.map((room) => room.id);

  const finalBookings = bookings.map((booking) => {
    // Here relying on the order of rooms, as they don't have and ID yet
    const room = rooms.at(booking.roomId - 1);
    const numNights = subtractDates(booking.endDate, booking.startDate);
    const roomPrice = numNights * (room.regularPrice - room.discount);
    const extrasPrice = booking.hasBreakfast
      ? numNights * 15 * booking.numGuests
      : 0; // hardcoded breakfast price
    const totalPrice = roomPrice + extrasPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "checked-out";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "checked-in";

    return {
      ...booking,
      numNights,
      roomPrice,
      extrasPrice,
      totalPrice,
      guestId: allGuestIds.at(booking.guestId - 1),
      roomId: allRoomIds.at(booking.roomId - 1),
      status,
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const { isDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <StyledUploader>
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings
      </Button>
    </StyledUploader>
  );
}

export default Uploader;
