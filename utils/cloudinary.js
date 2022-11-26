import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_NAME,
  CLOUDINARY_APIKEY,
  CLOUDINARY_APISECRET,
} from "../config.js";

// configuracion de cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_APIKEY,
  api_secret: CLOUDINARY_APISECRET,
  secure: true,
});

// subir imagen a cloudinary
export async function uploadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "img-api-crud",
  });
}

// eliminar imagen de cloudinary
export async function deleteImage(public_id) {
  return await cloudinary.uploader.destroy(public_id);
}
