import React from "react";
import { nanoid } from "nanoid";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
// import Typewriter from "@/Typewriter/Typewriter";
import { artists, Artist, Props } from "../page";

const ArtistPage: React.FC<Props> = ({ params }) => {
  const artist: Artist | undefined = artists.find(
    (artist) => artist.name.split(" ").join("") == params.artist
  );
  return (
    <>
      <div className="flex justify-center mt-[10px] font-bold ">
        {/* <Typewriter text={artist?.name ?? ""} /> */}
      </div>
      <div className="bio-container grid gap-4 mb-[10%]">
        <div className="flex flex-col items-center justify-evenly relative w-full overflow-hidden h-[400px] img-container">
          <div className="flex flex-col justify-evenly socials-container md:h-[400px] lg:h-[400px]">
            {artist?.socialMedia?.instagram && (
              <a
                target="_blank"
                href={artist?.socialMedia?.instagram}
                className="ig-button social-media-button w-[4rem] h-[4rem] cursor-pointer grid"
              >
                <FaInstagram className="text-5xl" />
              </a>
            )}
            {artist?.socialMedia?.facebook && (
              <a
                target="_blank"
                href={artist?.socialMedia.facebook}
                className="fb-button social-media-button w-[4rem] h-[4rem] cursor-pointer grid"
              >
                <FaFacebook className="text-5xl" />
              </a>
            )}

            {artist?.socialMedia?.twitter && (
              <a
                target="_blank"
                href={artist?.socialMedia?.twitter}
                className="twitter-button social-media-button w-[4rem] h-[4rem] cursor-pointer grid"
              >
                <FaTwitter className="text-5xl" />
              </a>
            )}
            {artist?.socialMedia?.tiktok && (
              <a
                target="_blank"
                href={artist?.socialMedia?.tiktok}
                className="tik-tok-button social-media-button w-[4rem] h-[4rem] cursor-pointer grid"
              >
                <FaTiktok className="text-5xl" />
              </a>
            )}
            {artist?.socialMedia?.youtube && (
              <a
                target="_blank"
                href={artist?.socialMedia?.youtube}
                className="youtube-button social-media-button w-[4rem] h-[4rem] cursor-pointer grid"
              >
                <FaYoutube className="text-5xl" />
              </a>
            )}
          </div>
          <Image
            src={artist?.headShot ?? "/../public/assets/images/dude.jpg"}
            alt={`${artist?.name} Headshot`}
            height="500"
            width="500"
            className="max-w-full h-auto block object-cover object-bottom"
          />
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="text-3xl  flex justify-center leading-10 w-[80%]">
            {artist?.bio}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 my-[12%] show-container">
        <div className="col-span-3 flex justify-between items-center p-4">
          <p className="text-4xl font-bold">Location</p>
          <div className="flex gap-[5px]">
            <p className="text-3xl font-bold">Date & Time</p>
          </div>
          <p className="text-4xl font-bold text-center">Tickets</p>
        </div>
        {artist?.dates?.map((d) => (
          <div key={nanoid()} className="col-span-3">
            <div className="flex justify-between items-center p-4">
              <p className="text-3xl">{d.location}</p>
              <div className="flex">
                <p className="text-2xl">
                  {d.date},{d.time}
                </p>
              </div>
              <div>
                <a
                  href={d.ticketLink}
                  target="_blank"
                  className="ticket-button inline-block bg-green-700 hover:bg-green-500 text-white no-underline rounded text-center cursor-pointer text-base font-bold uppercase"
                >
                  Ticket
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistPage;
