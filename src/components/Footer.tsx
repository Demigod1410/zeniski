import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Zeniski is a platform dedicated to mastering productivity and
              enhancing engagement. We empower users to transform their goals
              into achievements, fostering a vibrant community of
              high-performing individuals
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/add-task"
                  className="hover:text-white transition-colors duration-300"
                >
                  Add Tasks
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/view-tasks"
                  className="hover:text-white transition-colors duration-300"
                >
                  View Tasks
                </Link>
              </li>
              
            </ul>
          </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Dehradun, India</p>
          <p>Dehradun 248007</p>
          <p>Email: info@zeniski.com</p>
          <p>Phone: +91 7536050155</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        &copy; 2024 Zeniski. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
