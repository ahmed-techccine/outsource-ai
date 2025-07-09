
import React from 'react';

const SocialIcon: React.FC<{ href: string, iconClass: string }> = ({ href, iconClass }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition">
        <i className={iconClass}></i>
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-3">
                            <img src="https://i.imgur.com/jE61s7O.png" alt="US Flag" className="w-6 mt-1" />
                            <p className="text-gray-400">30 N Gould St Ste R, Sheridan, WY 82801</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <img src="https://i.imgur.com/bwnPZGy.png" alt="Estonia Flag" className="w-6 mt-1" />
                            <p className="text-gray-400">Vesivärava tn 50-201, Tallinn, 10152</p>
                        </div>
                        <div>
                            <a href="mailto:hi@upsilonit.com" className="font-semibold text-lg hover:text-[#d17700]">hi@upsilonit.com</a>
                        </div>
                        <div>
                             <a href="tel:+16509955553" className="font-semibold text-lg hover:text-[#d17700]">+1 (650) 995-5553</a>
                        </div>
                        <div className="flex space-x-4 pt-4">
                            <SocialIcon href="#" iconClass="fab fa-medium-m" />
                            <SocialIcon href="#" iconClass="fab fa-twitter" />
                            <SocialIcon href="#" iconClass="fab fa-linkedin-in" />
                            <SocialIcon href="#" iconClass="fab fa-facebook-f" />
                        </div>
                    </div>

                    {/* Column 2 & 3: Links */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white">Gen AI development</a></li>
                                <li><a href="#" className="hover:text-white">Discovery phase services</a></li>
                                <li><a href="#" className="hover:text-white">For early stage</a></li>
                                <li><a href="#" className="hover:text-white">For growth stage</a></li>
                                <li><a href="#" className="hover:text-white">Slack bot development</a></li>
                                <li><a href="#" className="hover:text-white">CTO as a service</a></li>
                                <li><a href="#" className="hover:text-white">All services</a></li>
                            </ul>
                            <h3 className="text-white font-bold text-lg mt-8 mb-4">Products</h3>
                             <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white">Collections</a></li>
                            </ul>
                        </div>
                        <div>
                             <h3 className="text-white font-bold text-lg mb-4">Pricing</h3>
                             <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white">Discovery phase services</a></li>
                                <li><a href="#" className="hover:text-white">MVP calculator</a></li>
                            </ul>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4">Company</h3>
                             <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white">Studio approach</a></li>
                                <li><a href="#" className="hover:text-white">About us</a></li>
                            </ul>
                        </div>
                         <div>
                             <h3 className="text-white font-bold text-lg mb-4 hover:text-[#d17700] cursor-pointer">Case studies</h3>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4 hover:text-[#d17700] cursor-pointer">Resources</h3>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4 hover:text-[#d17700] cursor-pointer">Insights</h3>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4 hover:text-[#d17700] cursor-pointer">Best startup tools</h3>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4 hover:text-[#d17700] cursor-pointer">Startup FAQs</h3>
                             <h3 className="text-white font-bold text-lg mt-8 mb-4 hover:text-[#d17700] cursor-pointer">Contact us</h3>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Upsilon LLC. All Rights Reserved</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
