import Image from "next/image";

export default function MainPoints() {
  return (
    <section className="px-20 py-10">
      <div className="flex my-5">
        <div>
          <h1 className="text-3xl font-bold my-5">Eligibility and Registration</h1>
          <p className="text-xl">
            Eligibility criteria vary depending on the step and include completion of required medical education, passing scores on previous steps (for Step 2 CK and Step 3), and compliance with state-specific requirements. Registration involves submitting an application, paying fees, and scheduling exam dates through the NBME or FSMB websites.
          </p>
        </div>
        <Image
          src="/FirstParagraph.jpeg"
          className="rounded-lg border p-2 border-amber-700 ml-4"
          alt="First Paragraph"
          width={300}
          height={300}
        />
      </div>
      <div className="flex my-5">
        <Image
          src="/SecondParagraph.jpeg"
          className="rounded-lg border p-2 border-amber-700 mr-4"
          alt="Second Paragraph"
          width={300}
          height={300}
        />
        <div>
          <h1 className="text-3xl font-bold my-5">Scoring and Reporting</h1>
          <p className="text-xl">
            USMLE uses a three-digit scoring system for Step 1, Step 2 CK, and Step 3, with passing scores determined by the medical licensing authorities. Results are typically available within a few weeks of taking the exam and are reported directly to the licensing authority selected during registration.
          </p>
        </div>
      </div>
      <div className="flex my-5">
        <div>
          <h1 className="text-3xl font-bold my-5">Preparation and Resources</h1>
          <p className="text-xl">
            Effective preparation involves thorough review of medical textbooks, practice questions, online resources, and possibly participation in review courses. Study strategies often include creating personalized study schedules and focusing on high-yield topics relevant to each exam step
          </p>
        </div>
        <Image
          src="/ThirdParagraph.jpeg"
          className="rounded-lg border p-2 border-amber-700 ml-4"
          alt="Third Paragraph"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
