import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = React.forwardRef((src:string, ref: React.Ref<HTMLAnchorElement>) => {
  return (
      <Image src={src} width={88} height={77} alt="PoSciDon Logo" />
  );
});

// const BlueLogo = React.forwardRef((props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
//     return (
//       <a href={props.href} onClick={props.onClick} ref={ref}>
//         <Image src="/logo1.png" width={88} height={77} alt="logo" />
//       </a>
//     );
//   });

const LogoDisplay = () => {
//   const [isHovering, setIsHovered] = useState(false);
  const [src, setSrc] = useState("./../PSDlogoBlack.svg");
  const onMouseEnter = () => setSrc("./../PSDlogo.svg");
  const onMouseLeave = () => setSrc("./../PSDlogoBlack.svg");
  return (
    <div
      className="flex items-center flex-shrink-0 mr-6 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        <Link href="/">
        <Logo
        src={src}
        />
        </Link>
    </div>
  );
};