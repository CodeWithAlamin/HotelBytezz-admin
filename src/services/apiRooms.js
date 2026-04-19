import supabase, { supabaseUrl } from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }

  return data;
}

export async function createEditRoom(newRoom, id) {
  const image = newRoom.image;
  const hasImagePath = typeof image === "string" && image.startsWith(supabaseUrl);
  const hasNewImage = image instanceof File;

  if (!image) throw new Error("Please select a room image");

  if (typeof image === "string" && !hasImagePath) {
    throw new Error("Room image URL is invalid");
  }

  const imageName = hasNewImage
    ? `${Date.now()}-${Math.random()}-${image.name}`
        .replaceAll("/", "")
        .replace(/[^a-zA-Z0-9._-]/g, "-")
    : null;

  const imagePath = hasNewImage
    ? supabase.storage.from("room-images").getPublicUrl(imageName).data.publicUrl
    : image;

  if (hasNewImage) {
    const { error: storageError } = await supabase.storage
      .from("room-images")
      .upload(imageName, image, {
        contentType: image.type || "image/jpeg",
      });

    if (storageError) {
      console.error(storageError);
      throw new Error(`Room image could not be uploaded: ${storageError.message}`);
    }
  }

  // Create or edit room
  let query = supabase.from("rooms");

  // A) CREATE
  if (!id) query = query.insert([{ ...newRoom, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newRoom, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    if (hasNewImage) {
      await supabase.storage.from("room-images").remove([imageName]);
    }
    console.error(error);
    throw new Error(`Room could not be saved: ${error.message}`);
  }

  return data;
}

export async function deleteRoom(id) {
  const { data, error } = await supabase.from("rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be deleted");
  }

  return data;
}
