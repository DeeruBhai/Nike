import Hero from "./Sections/Hero";

import Popular from "./Sections/Popular";
import Services from "./Sections/Services";
import Speacialoffers from "./Sections/Speacialoffers";
import Subscribe from "./Sections/Subscribe";
import CustomerReview from "./Sections/CustomerReview";
import SuperQuality from "./Sections/SuperQuality";
import Login from "./Sections/Login";
import Signup from "./Sections/Signup";
function FronPage() {
  return (
    <main className="relative">
      <section className="x1:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 ">
        <Services />
      </section>
      <section className="padding">
        <Speacialoffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      {/* <section className="padding-x sm:py-32 py-16 w-full">
        <Login />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Signup />
      </section> */}
    </main>
  );
}

export default FronPage;
