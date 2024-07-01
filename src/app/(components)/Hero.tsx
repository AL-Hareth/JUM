import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video className="min-w-full min-h-full absolute object-cover"
            src="/Hero.webm"
            autoPlay 
            muted 
            loop
            controls={false}
          ></video>
        </div>
        <div className="video-content space-y-2 bg-black h-full w-full bg-opacity-50 z-10 flex justify-center items-center">
          <div className="hero-content text-center z-20">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold"> Your Gateway to Medical Licensure</h1>
              <p className="py-6">
                Unlock your potential with our proven strategies and personalized approach to USMLE Step 1 preparation.
              </p>
              <Link href="/about"><button className="btn btn-info">More About Us</button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
