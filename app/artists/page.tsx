import Link from "next/link";

export interface Props {
  params: {
    artist: string;
  };
}

type Dates = {
  date: string;
  time: string;
  location: string;
  ticketLink: string;
};

type SocialMedia = {
  instagram?: string;
  facebook?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
};
export interface Artist {
  id: number;
  name: string;
  bio: string;
  headShot: string;
  dates?: Dates[];
  socialMedia?: SocialMedia;
  email: string;
}

export const artists: Artist[] = [
  {
    id: 1,
    name: "John Smith",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    headShot: "/../public/assets/images/dude.jpg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/johnsmith",
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      tiktok: "https://tiktok.com/@johnsmith",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "johnsmith@example.com",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    bio: "Sarah Johnson is a rising star in the comedy scene with her hilarious observations on everyday life.",
    headShot: "/../public/assets/images/lady.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/sarah-johnson-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/sarahjohnson",
      facebook: "https://facebook.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      tiktok: "https://tiktok.com/@sarahjohnson",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "sarahjohnson@example.com",
  },
  {
    id: 3,
    name: "Michael Davis",
    bio: "Michael Davis is a veteran comedian known for his quick wit and hilarious improvisational skills.",
    headShot: "/../public/assets/images/dude2.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/michael-davis-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/michaeldavis",
      facebook: "https://facebook.com/michaeldavis",
      twitter: "https://twitter.com/michaeldavis",
      tiktok: "https://tiktok.com/@michaeldavis",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "michaeldavis@example.com",
  },
  {
    id: 4,
    name: "Jessica Roberts",
    bio: "Jessica Roberts is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady2.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 5,
    name: "Ali Wong",
    bio: "Ali Wong is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady3.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 6,
    name: "Alice Porter",
    bio: "Alice Porter is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/lady4.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 7,
    name: "Ahmed Ali",
    bio: "Ahmed Ali is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/dude4.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
  {
    id: 8,
    name: "Sam Asghari",
    bio: "Sam Asghari is a comedian known for her sharp observations on relationships and pop culture.",
    headShot: "/../public/assets/images/dude3.jpeg",
    dates: [
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/jessica-roberts-tickets",
      },
      {
        date: "July 6, 2023",
        time: "8:30PM",
        location: "Addison Improv",
        ticketLink: "https://example.com/john-smith-tickets",
      },
    ],
    socialMedia: {
      instagram: "https://instagram.com/jessicaroberts",
      facebook: "https://facebook.com/jessicaroberts",
      twitter: "https://twitter.com/jessicaroberts",
      tiktok: "https://tiktok.com/@jessicaroberts",
      youtube: "https://youtube.com/@johnsmith",
    },
    email: "jessicaroberts@example.com",
  },
];

const Artists = () => {
  return (
    <div className="mt-[100px]">
      {artists.map((artist) => (
        <Link
          href={`/artists/${artist.name.split(" ").join("")}/`}
          key={artist.id}
        >
          <h3>{artist.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Artists;
