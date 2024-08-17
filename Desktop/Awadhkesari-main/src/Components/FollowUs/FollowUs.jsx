import React from 'react'
import {SectionCatagory, SocialMediaIcons} from '../index'
import { Link } from 'react-router-dom';
const FollowUs = () => {
    const iconStyles = {
        container: 'flex items-center justify-center text-white w-12 h-12 rounded', // Square box
        facebook: 'bg-blue-600',
        twitter: 'bg-blue-400',
        googlePlus: 'bg-red-600',
        linkedin: 'bg-blue-700',
        skype: 'bg-[#00aff0]',
        pinterest: 'bg-red-700',
        instagram: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
        rss: 'bg-orange-500',
        outlook: 'bg-blue-500',
      };
    const socialMediaData = [
        { href: 'https://www.facebook.com', icon: SocialMediaIcons.FacebookIcon, style: iconStyles.facebook },
        { href: 'https://www.twitter.com', icon: SocialMediaIcons.TwitterIcon, style: iconStyles.twitter },
        { href: 'https://plus.google.com', icon: SocialMediaIcons.GooglePlusIcon, style: iconStyles.googlePlus },
        { href: 'https://www.linkedin.com', icon: SocialMediaIcons.LinkedinIcon, style: iconStyles.linkedin },
        { href: 'https://www.skype.com', icon: SocialMediaIcons.SkypeIcon, style: iconStyles.skype },
        { href: 'https://www.pinterest.com', icon: SocialMediaIcons.PinterestIcon, style: iconStyles.pinterest },
        { href: 'https://www.instagram.com', icon: SocialMediaIcons.InstagramIcon, style: iconStyles.instagram },
        { href: 'https://www.rss.com', icon: SocialMediaIcons.RssIcon, style: iconStyles.rss },
        { href: 'https://outlook.com', icon: SocialMediaIcons.OutlookIcon, style: iconStyles.outlook },
    ];
    const SocialMediaLink = ({ href, icon: Icon, styles }) => (
        <li>
          <Link
            to={{ pathname: href }}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.container}
          >
            <Icon size={24} />
          </Link>
        </li>
      );
  return (
    <div className=' my-1 lg:my-4'>
      <SectionCatagory name='Follow us'/>
      <ul className="flex  flex-wrap justify-center lg:justify-start gap-2">
      {socialMediaData.map((item, index) => (
        <SocialMediaLink
          key={index}
          href={item.href}
          icon={item.icon}
          styles={{ container: `${iconStyles.container} ${item.style}` }}
        />
      ))}
    </ul>
    </div>
  )
}

export default FollowUs
