import React from 'react'
import bg from "public/bg.jpg"
import Image from 'next/image'
import { AiOutlineCheck } from 'react-icons/ai'
import { easeInOut, motion } from 'framer-motion'

const Subscription = () => {

    interface Props {
        type: string;
        price: string;
        text: string;
        color: string
        bg: string
    }

    const CardHeader = ({ type, price, text, color, bg }: Props) => (
        <div className={`bg-[${bg}] text-white flex flex-col items-start px-4 py-4 rounded-xl`}>
            <h1 className='text-[#ffe203] text-xl mb-3 font-semibold'>{type}</h1>
            <p className={`text-${color} font-semibold mb-[2px]`}>{`1 Month - $${price}/month`}</p>
            <p className={`text-[#b8b5b5] text-sm`}>{text}</p>
        </div>
    )

    return (
        <div className='flex flex-col items-center justify-center py-32  w-full '>
            <div className='absolute bg-black'>
                <Image src={bg} alt="bg" className=' w-full h-full object-cover opacity-20' />
            </div>
            <div className='z-30 flex flex-col items-center justify-center gap-3  text-center  '>
                <motion.div
                    initial={{ y: '-50%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <h1 className='text-6xl text-white font-medium'>Discover a world of incredible <br />
                        gaming experience now</h1>
                    <p className='text-white text-lg my-5'>Choose from three subscription plan options to get monthly  <br /> benefits and decks, that suit your gaming style.</p>
                </motion.div>
                <div className='grid grid-cols-3 gap-10 mt-10'>


                    {/* Essential */}
                    <motion.div
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: .8, ease: 'easeInOut' }}
                        className='bg-[#231942] p-2 w-[20em] rounded-2xl'>
                        <div>
                            <CardHeader
                                type="Essential"
                                price="14.99"
                                text="Billed every 1 Month. Cancel any time."
                                color="white"
                                bg="#674BD8"
                            />
                        </div>

                        <ul className='flex flex-col items-start  gap-2 px-3 py-5'>
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Rating Matchmaking</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Exclusive Background</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Extra Crystals</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Game Help</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Desk Sharing</li>
                            <hr />
                            <li className='text-[#414479] sub_list' ><AiOutlineCheck style={{ color: '#414479' }} /> Deck Builder</li>
                            <hr />
                            <li className='text-[#414479] sub_list' ><AiOutlineCheck style={{ color: '#414479' }} /> Deck Building Guides</li>
                            <hr />
                            <li className='text-[#414479] sub_list' ><AiOutlineCheck style={{ color: '#414479' }} /> New Hero Trials</li>
                            <hr />
                            <li className='text-[#414479]  sub_list' ><AiOutlineCheck style={{ color: '#414479' }} /> Monthly  Card Packs</li>
                        </ul>


                    </motion.div>


                    {/* Extra */}
                    <motion.div
                        initial={{ y: "60%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}

                        className='bg-[#674BD8] w-[20em] p-2 rounded-2xl scale-110'>
                        <div className='bg-white rounded-xl' >
                            <CardHeader
                                type="Extra"
                                price="14.99"
                                text="Save $12 per year."
                                color="black"
                                bg="#"
                            />
                        </div>
                        <ul className='flex flex-col items-start  gap-2 px-3 py-5'>
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Rating Matchmaking</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]'><AiOutlineCheck style={{ color: '#ffe203' }} /> Exclusive Background</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Extra Crystals</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Game Help</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Desk Sharing</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Deck Builder</li>
                            <hr />
                            <li className='text-[#a3a0d4] sub_list'><AiOutlineCheck style={{ color: '#a3a0d4' }} /> Deck Building Guides</li>
                            <hr />
                            <li className='text-[#a3a0d4] sub_list'><AiOutlineCheck style={{ color: '#a3a0d4' }} /> New Hero Trials</li>
                            <hr />
                            <li className='text-[#a3a0d4] sub_list' ><AiOutlineCheck style={{ color: '#a3a0d4' }} /> Monthly  Card Packs</li>
                        </ul>

                    </motion.div>


                    {/* Deluxe */}

                    <motion.div
                        initial={{ y: "65%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, ease: "easeInOut" }}
                        className='bg-[#231942] w-[20em] p-2  rounded-2xl'>
                        <div>
                            <CardHeader
                                type="Deluxe"
                                price="12.99"
                                text="Save $24 per year."
                                color="white"
                                bg="#674BD8"

                            />
                        </div>


                        <ul className='flex flex-col items-start  gap-2 px-3 py-5'>
                            <li className='sub_list text-[#e2e2e2]'  ><AiOutlineCheck style={{ color: '#ffe203' }} /> Rating Matchmaking</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]'  ><AiOutlineCheck style={{ color: '#ffe203' }} /> Exclusive Background</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Extra Crystals</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Game Help</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Desk Sharing</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Deck Builder</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> Deck Building Guides</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]' ><AiOutlineCheck style={{ color: '#ffe203' }} /> New Hero Trials</li>
                            <hr />
                            <li className='sub_list text-[#e2e2e2]'  ><AiOutlineCheck style={{ color: '#ffe203' }} /> Monthly  Card Packs</li>
                        </ul>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
