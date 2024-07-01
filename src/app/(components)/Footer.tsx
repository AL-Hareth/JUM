import Image from "next/image"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content py-10 px-5 sm:px-20">
      <aside>
        <Image src="/logo.png" alt="Logo" width={90} height={90} />
        <p>
          JORDAN USMLE MENTORS
          <br />
          Providing Amazing Medical Licensure
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a target="_blank" className="hover:text-pink-600" href="https://www.instagram.com/jordanusmlementors?igsh=MWFldjNmaHI3N3BmeQ=="> 
            <InstagramIcon style={{ fontSize: 35 }} />
          </a>
          <a target="_blank" className="hover:text-sky-600" href="https://www.facebook.com/profile.php?id=61561140161409&mibextid=LQQJ4d">
            <FacebookIcon style={{ fontSize: 35 }} />
          </a>
        </div>
      </nav>
    </footer>
  );
}
