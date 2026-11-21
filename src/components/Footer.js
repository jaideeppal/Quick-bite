const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-gray-900 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 md:flex-row">

        {/* Brand */}
        <div className="text-xl font-extrabold tracking-wide">
          Quick<span className="text-orange-500">Bite</span>
          <p className="mt-1 text-xs font-normal text-gray-400">
            Delicious food, delivered to your door.
          </p>
        </div>

        {/* Created By */}
        <div className="text-center text-sm text-gray-300">
          Created with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/jjaideep-pal/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-orange-400 transition hover:text-orange-300 hover:underline"
          >
            Jaideep Pal
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          © 2026–2027{" "}
          <span className="font-semibold text-orange-400">
            Quick Bite
          </span>
          . All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;

