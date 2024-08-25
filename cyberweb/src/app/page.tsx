'use client';
import Image from "next/image";
import Header from "./header";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect('/home');
}