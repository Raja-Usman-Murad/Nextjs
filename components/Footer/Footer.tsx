const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-auto">
      <div className="container mx-auto text-center text-white flex justify-center items-center h-full">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
