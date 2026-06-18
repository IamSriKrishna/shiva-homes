export default function LocationSection() {
  return (
    <section className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Location
        </p>

        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          Visit Our Office
        </h2>

        <p className="mt-6 max-w-2xl text-white/60">
          Chowdry Nagar, 10th Cross St, Chowthri Nagar, Nesapakkam, Chennai,
          Tamil Nadu 600087
        </p>

        <div className="mt-12 overflow-hidden rounded-[32px] border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485.8709961393601!2d80.18221618063484!3d13.037710840479813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261db98560d7f%3A0x67f4ae0f8ca0b73d!2sShivadha-Multispeciality%20clinic%E2%80%99s!5e0!3m2!1sen!2sin!4v1781814795788!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
