import React from "react";
import Link from "next/link";
import {
  RiSoundcloudFill,
  RiInstagramFill,
  RiTwitterXFill
} from "react-icons/ri";

const socials = [
  { path: '#', icon: RiSoundcloudFill },
  { path: '#', icon: RiInstagramFill },
  { path: '#', icon: RiTwitterXFill },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles = "", iconStyles = "" }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link href={item.path} key={index}>
            <Icon className={iconStyles} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
