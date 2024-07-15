export default function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer className={`bg-black shadow-lg z-30`}>
      <div className="myContainer py-4 align-middle text-center relative">
        <span className="text-white">{`All rights reserved Basel & Co © ${yearNow} Created by `}</span>
        <a className="text-sky-500 bold" href="https://github.com/Baseldiab">
          Basel Diab
        </a>
      </div>
    </footer>
  );
}
