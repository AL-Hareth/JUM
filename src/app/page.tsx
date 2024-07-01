import Steps from "./(components)/Steps";
import MainPoints from "./(components)/MainPoints";
import Hero from "./(components)/Hero";

export default async function Home() {

  return (
    <main>
      <Hero />
      <div className="text-center px-5 sm:px-20">
        <h1 className="text-5xl font-bold my-5">Steps of USMLE</h1>
        <Steps />
      </div>
      <div className="bg-slate-900 py-10 text-center px-5 sm:px-20">
        <h1 className="text-5xl font-bold my-5 text-center text-white">Welcome</h1>
        <p className="text-white">Welcome to our dedicated team committed to helping you excel in your USMLE Step 1 journey. As medical students ourselves, we understand the challenges and aspirations you face. With our comprehensive support and tailored resources, we aim to equip you with the knowledge and strategies needed to achieve success on this critical examination. Let{"'"}s embark on this transformative journey together, ensuring you{"'"}re fully prepared to conquer the USMLE Step 1 and advance confidently in your medical career</p>
      </div>
      <MainPoints />
    </main>
  );
}
