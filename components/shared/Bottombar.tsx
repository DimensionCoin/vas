import Image from "next/image";

function Bottombar() {
  return (
    <section className="bottombar">
      <div className="flex justify-between px-10 py-1 ">
        <a href="tel:4167023183" title="Call us at 4167023183">
          <Image src="/phone.svg" alt="phone" height={30} width={30} />
        </a>
        <a href="mailto:contact@vassallocon.com?subject=Contact Vassallo Construction">
          <Image src="/email.svg" alt="call" height={30} width={30} />
        </a>
        <a
          href="https://www.instagram.com/vassallotyler/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit our Instagram page"
        >
          <Image src="/insta.svg" alt="Instagram" height={30} width={30} />
        </a>
       
      </div>
    </section>
  );
}

export default Bottombar;
