/* "use server"; */

import { revalidatePath } from "next/cache";
import { Events, Users } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
 /*  "use server" */
  const {  fullname, email, phone, country, date, mess,} = 
  Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new Users({
      fullname,
      email,
      phone,
      country,
      date,
      mess,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  /* revalidatePath("/dashboard/users");
  redirect("/dashboard/users"); */
};


 
/* export const addEvent = async (formData) => {

  const {  title, desc, img,} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEvents = new Events({
      title,
      desc,
      img,
     
    });

    await newEvents.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Events!");
  }

  revalidatePath("/dashboard/Eventss");
  redirect("/dashboard/Eventss");
};
 */
/* export const updateUser = async (formData) => {
  const { id,  fullname, email, phone, country, date, mess, } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      fullname,
      email,
      phone,
      country,
      date,
      mess,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Users.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addEvents = async (formData) => {
  const {  title, desc, img,} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEvents = new Events({
      title,
      desc,
      img,
     
    });

    await newEvents.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Events!");
  }

  revalidatePath("/dashboard/Eventss");
  redirect("/dashboard/Eventss");
};

export const updateEvents = async (formData) => {
  const {  title, desc, img, } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      img,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Events.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Events!");
  }

  revalidatePath("/dashboard/Eventss");
  redirect("/dashboard/Eventss");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Users.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/Eventss");
};

export const deleteEvents = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Events.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Events!");
  }

  revalidatePath("/dashboard/Eventss");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials!";
  }
};
 */