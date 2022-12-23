// import {
//   ImFacebook2,
//   ImTwitter,
//   ImYoutube2,
//   ImInstagram,
// } from 'react-icons/im';
import Link from "next/link";

export default function header() {
  return (
    <header className="bg-blue-100">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-3 ">
          <Link href={'/'}>
            <h2 className="font-bold ">SATELLITE HEALTHCARE FOUNDATION</h2>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={'/'}>Our Mission </Link>
            <Link href={'/'}>About Us</Link>
            <Link href={'/'}>Get Involved</Link>
            <Link href={'/'}>Stories</Link>
            <Link href={'/'}>Contact</Link>
          </div>
        </div>
        {/* <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={'/'}>
              <ImFacebook2 />
            </Link>
            <Link href={'/'}>
              <ImInstagram />
            </Link>
            <Link href={'/'}>
              <ImTwitter />
            </Link>
            <Link href={'/'}>
              <ImYoutube2 />
            </Link>
          </div>
        </div> */}
      </div>
    </header>
  );
}
