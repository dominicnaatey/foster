export default function ContactForm() {
  return (
    <div className="lg:col-span-2 flex flex-col gap-6">
      <h2 className="text-slate-900 text-[22px] font-bold leading-tight">Send us a Message</h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col sm:col-span-2">
          <label className="text-slate-900 text-base font-medium pb-2" htmlFor="fullName">Full Name</label>
          <input id="fullName" placeholder="Enter your full name" className="form-input w-full rounded-lg border border-slate-300 bg-white h-12 p-3 focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-900 text-base font-medium pb-2" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email address" className="form-input w-full rounded-lg border border-slate-300 bg-white h-12 p-3 focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="flex flex-col">
          <label className="text-slate-900 text-base font-medium pb-2" htmlFor="phone">Phone <span className="text-slate-500 text-sm">(Optional)</span></label>
          <input id="phone" type="tel" placeholder="Enter your phone number" className="form-input w-full rounded-lg border border-slate-300 bg-white h-12 p-3 focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="flex flex-col sm:col-span-2">
          <label className="text-slate-900 text-base font-medium pb-2" htmlFor="subject">Subject</label>
          <select id="subject" className="form-select w-full rounded-lg border border-slate-300 bg-white h-12 p-3 focus:ring-2 focus:ring-primary/50">
            <option>Becoming a Foster Parent</option>
            <option>Donations</option>
            <option>Volunteering</option>
            <option>General Inquiry</option>
          </select>
        </div>
        <div className="flex flex-col sm:col-span-2">
          <label className="text-slate-900 text-base font-medium pb-2" htmlFor="message">Message</label>
          <textarea id="message" placeholder="How can we help?" className="form-textarea min-h-32 w-full rounded-lg border border-slate-300 bg-white p-3 focus:ring-2 focus:ring-primary/50" />
        </div>
        <div className="flex items-center gap-3 sm:col-span-2">
          <input id="consent" type="checkbox" className="form-checkbox h-5 w-5 text-primary border-slate-300" />
          <label htmlFor="consent" className="text-slate-700 text-sm">I agree to be contacted by the Foster Agency.</label>
        </div>
        <div className="sm:col-span-2">
          <button className="w-full sm:w-auto h-12 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">Send Message</button>
        </div>
      </form>
    </div>
  );
}
