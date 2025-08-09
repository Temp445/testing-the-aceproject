
import Image from 'next/image';
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="bg-gray-700 text-gray-300 ">
      <div className='container mx-auto py-10'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between md:justify-around space-y-8 md:space-y-0">

            <div className='md:w-80 '>
              <div className="text-lg font-semibold text-white flex gap-2"> <Image src={logo} alt="logo" width={100} height={100} className='w-6 h-6' /> AceProject</div>
              <p className="mt-2 text-sm flex flex-wrap">{t('Description')}</p>
            </div>

            <div className='flex gap-14 xl:gap-28'>
              <div>
                <h4 className="text-lg font-semibold text-white">{t('QuickLinks.Title')}</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><Link href="/#features" className="hover:text-teal-400">{t('QuickLinks.Features')}</Link></li>
                  <li><Link href="/#client" className="hover:text-teal-400">{t('QuickLinks.Clients')}</Link></li>
                  <li><Link href="/#pricing" className="hover:text-teal-400">{t('QuickLinks.Pricing')}</Link></li>
                  <li><Link href="/#contact" className="hover:text-teal-400">{t('QuickLinks.Contact')}</Link></li>
                </ul>
              </div>


              <div>
                <h4 className="text-lg font-semibold text-white">{t('FollowUs.Title')}</h4>
                <ul className="mt-2 space-y-2 text-sm">
                  <li><a href="https://www.facebook.com/people/Ace-Software-Solutions-Pvt-Ltd/61565550617223/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Facebook</a></li>
                  <li><a href="https://youtube.com/@acesoftwaresolutions?si=KqZ0BFZg5pNmGBqk" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Youtube</a></li>
                  <li><a href="https://www.instagram.com/ace_software_solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Instagram</a></li>
                  <li><a href="https://in.linkedin.com/company/ace-software-solutions-private-limited" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a></li>
                </ul>
              </div>
            </div>

            <div className="md:hidden lg:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.626039048191!2d80.20146899191994!3d13.0157278024425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669470c1b127%3A0xe3512b101f4ee3ad!2sACE%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742627952587!5m2!1sen!2sin"
                title="ACE Software Solutions location"
                className="w-full h-full rounded"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
