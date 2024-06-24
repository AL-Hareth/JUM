import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-hero-pattern">
      <div className="hero bg-black bg-opacity-70 w-full h-full">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold"> Your Gateway to Medical Licensure</h1>
            <p className="py-6">
              USMLE: Your key to unlocking medical practice in the US! This challenging 3-step exam assesses your ability to apply medical knowledge to real-world scenarios. It's kind of like a final boss battle before you can start treating patients on your own.
            </p>
            <Link href="/about"><button className="btn btn-info">More About Us</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
