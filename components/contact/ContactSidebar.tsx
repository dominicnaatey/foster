import Image from "next/image";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-1 flex flex-col gap-8">
      {/* <div className="flex flex-col gap-4">
        <h3 className="text-slate-900 text-xl font-bold">Our Location</h3>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJWaIcS-6PTDN8MaY3hj-qzTU89-Lt8psS2aQ3HYUZDtQbNH4zkzM6TO1v-5h-uM-soZrmsTkkJmcecWOV2ikINgiAQtC5NLb_yeSy52Q0iubHTCkoShsAcIWYcyqWvntyQMhrZ2b2LH7YhVzlGrqH5j48jer9raqMV6e0sgn6SgAodBsfcVrBOOiC30oXziHU7jgD6g-0lH_RHCz7uAslRdP25SpqYb8Fk_a7BB_Gvuwgf8KJqV-hWBt68V0QwCcBIwGS8grU_A"
            alt="Map"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-start gap-4 text-slate-700">
          <MapPinIcon className="w-5 h-5 text-primary mt-1" aria-hidden="true" />
          <p>
            123 Community Lane,
            <br />San Francisco, CA 94102,
            <br />United States
          </p>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <PhoneIcon className="w-5 h-5 text-primary" aria-hidden="true" />
          <p>(123) 456-7890</p>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <EnvelopeIcon className="w-5 h-5 text-primary" aria-hidden="true" />
          <p>info@fosteragency.org</p>
        </div>
      </div> */}
      <div className="flex flex-col gap-4">
        <h3 className="text-slate-900 text-xl font-bold">Contact Us</h3>
        <div className="flex items-center gap-4 text-slate-700">
          <BuildingOfficeIcon className="w-5 h-5 text-black" aria-hidden="true" />
          <p>A New Direction for Youth</p>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <PhoneIcon className="w-5 h-5 text-black" aria-hidden="true" />
          <p>952-657-4300</p>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <EnvelopeIcon className="w-5 h-5 text-black" aria-hidden="true" />
          <p>Info@anewdirectionforyouth.org</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-slate-900 text-xl font-bold">Hours</h3>
        <ul className="space-y-2 text-slate-700">
          <li className="flex justify-between"><span>Monday - Thursday</span> <span>8:00 AM - 4:00 PM CST</span></li>
          <li className="flex justify-between"><span>Friday</span> <span>8:00 AM – 12:00 PM CST</span></li>
          <li className="flex justify-between"><span>Saturday - Sunday</span> <span className="text-slate-500">Closed</span></li>
        </ul>
      </div>
      {/* <div className="bg-primary/10 p-6 rounded-lg flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <ExclamationTriangleIcon className="w-5 h-5 text-primary" aria-hidden="true" />
          <h4 className="text-primary text-lg font-bold">In an Emergency?</h4>
        </div>
        <p className="text-slate-700 text-sm">
          If you are a foster parent and have an urgent situation outside of business hours,
          please call our 24/7 emergency line at (123) 555-0199.
        </p>
      </div> */}
    </div>
  );
}
