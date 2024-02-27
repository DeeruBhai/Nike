import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";

function ErrorPage() {
  return (
    <>
      <Nav />
      <div
        className="flex flex-col text-4xl font-bold justify-items-center gap-12 items-center p-64 
      absolute  w-full"
      >
        Error 404 page not found !
        <Link to="/" className="font-semibold text-coral-red hover:underline">
          <FontAwesomeIcon icon={faHouse} className="" /> Home Page
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
