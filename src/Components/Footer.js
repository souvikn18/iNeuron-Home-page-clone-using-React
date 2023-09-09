import React from 'react'
function Footer({Logo, Address, EmailId, ISO}) {
    return(
        <>
            <footer className='h-[603px] bg-[#233c7b]'>
                <div className='flex justify-center mx-auto '>
                    <div className='flex w-[1760px] h-[500px] py-[100px] pl-[70px]'>
                        <div className='w-[433px] h-[500px] mx-auto'>
                            <div className='h-[110px] w-[433px] flex flex-col '>
                                <img className='w-[176px] h-[49px]' src={Logo} alt='...'/>
                                <div className='flex gap-1 '>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></g></svg>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></g></svg>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></g></svg>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path></g></svg>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></g></svg>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" class="Footer_footer_social_icons__343g6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"></path></g></svg>
                                </div>
                            </div>
                            <hr className='w-[433px]  border-2 bg-orange-300 border-orange-400 mt-[-40px]'></hr>
                            <div className='w-[433px] h-[108px] flex gap-3 items-center my-4'>
                                <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="Footer_footer_location_marker__680ja" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                <p className='h-[84px] w-[350px] text-[17px] text-[#e0e0e0] my-[12px]'>{Address}</p>
                            </div>
                            <div className='w-[433px] h-[52px] flex gap-3 items-center my-2'>
                                <svg className='mb-[55px]' stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 1024 1024" class="Footer_footer_location_marker__680ja" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 0 1-68.7 0z"></path><path d="M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z"></path><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z"></path></svg>
                                <p className='h-[84px] w-[350px] text-[17px] text-[#e0e0e0] my-[12px] font-bold'>Email us:<span className='text-[17px] text-[#e0e0e0] hover:text-white font-normal ml-2'>{EmailId}</span></p>
                            </div>
                            <div className='w-[433px] h-[146px] flex flex-col'>
                                <img className='w-[80px] h-[106px]' src={ISO} alt='...'/>
                                <p className='h-[28px] w-[80px] text-[17px] text-[#e0e0e0] my-[12px] mx-2'>ISO 9001</p>
                            </div>
                        </div>


                        <div className='w-[433px] h-[276px] mx-auto'>
                            <div>
                                <h3 className='text-white text-[28px] font-semibold'>Company</h3>
                            </div>
                            <hr className='w-[130px] border-2 bg-orange-300 border-orange-400 mt-2'></hr>
                            <div className='flex gap-2 my-4'>
                                <div>
                                    <ul className='flex flex-col gap-2'>
                                        <li className='text-[17px] text-[#e0e0e0] '>About us</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Community</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>FAQs</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Job assistance</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Terms and conditions</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-2'>
                                        <li className='text-[17px] text-[#e0e0e0] '>Contact us</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Hack-A-Thon</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Job guarantee</li>
                                        <li className='text-[17px] text-[#e0e0e0] '>Privacy policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className='w-[433px] h-[271px] mx-auto'>
                            <div>
                                <h3 className='text-white text-[28px] font-semibold'>Products</h3>
                            </div>
                            <hr className='w-[130px] border-2 bg-orange-300 border-orange-400 mt-2'></hr>
                            <div className='flex gap-2 my-4'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-[17px] text-[#e0e0e0] '>Neuro Lab</li>
                                    <li className='text-[17px] text-[#e0e0e0] '>Job portal</li>
                                    <li className='text-[17px] text-[#e0e0e0] '>Internship portal</li>
                                    <li className='text-[17px] text-[#e0e0e0] '>Become an affiliate</li>
                                    <li className='text-[17px] text-[#e0e0e0] '>Hall of fame</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
            
        </>
    )
}
export default Footer