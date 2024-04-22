import MultipleItems from "./slider";
function StatisticsSection() {
  return (
    <>
      <section className="section1 py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
              <h1 className="text-white">142</h1>
              <p className="text-center text-white">Total Launches</p>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <h1 className="text-white">263</h1>
              <p className="text-center text-white">Total Landings</p>
            </div>
            <div className="col-lg-4 col-md-4 col-6">
              <h1 className="text-white">358</h1>
              <p className="text-center text-white">Total Satellites</p>
            </div>
          </div>
        </div>
      </section>
    <section>
        <div className="container">
        <MultipleItems />
        </div>
    </section>
      <section className="section4 mt-5 mb-5">
        <div className="container pt-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <h3>Exclusive</h3>
              <h1>Holder Benefits</h1>
              <div className="row mt-3">
                <div className="col-lg-4 col-md-6  mt-5">
                  <h4>Customizable Avatars</h4>
                  <p className="mt-4">Update your Faces.art&apos;s appearance based on your wallet&apos;s holdings or achievements within the PROOF ecosystem.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                  <h4>Community Membership</h4>
                  <p className="mt-4">Join the Faces.art community on Discord, on Twitter, and as a Collector on the PROOF art platform.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                  <h4>Digital & IRL events</h4>
                  <p className="mt-4"></p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                  <h4>Nesting Rewards</h4>
                  <p className="mt-4">As your Faces.art nests, you&apos;ll unlock exclusive goods to celebrate your holding time. Visit Nesting Rewards to learn more.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                  <h4>Art & collectible drops</h4>
                  <p className="mt-4">Enjoy digital drops exclusively for the Faces.art, from Oddities and Mythics to our upcoming Diamond Exhibition.</p>
                </div>
                <div className="col-lg-4 col-md-6 mt-5">
                  <h4>BB Society membership</h4>
                  <p className="mt-4">Activate creative entrepreneurship with the Lunar Society; home of the Faces.art&apos; and Mythics&apos; community builders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatisticsSection;
