import React from 'react'
import bg1 from 'public/background.jpg'
import bg2 from 'public/bg.jpg'
import bg3 from 'public/viper.webp'
import bg4 from 'public/deck-bg.jpg'
import Image from 'next/image'
import { AiFillCaretRight } from 'react-icons/ai'
import { AiFillCaretLeft } from 'react-icons/ai'
import { motion } from 'framer-motion'

const EpicBackground = () => {

    const images = [bg1, bg2, bg3, bg4]

    return (
        <div className='bg-[#0a0a11] relative py-32  flex flex-col items-center justify-center gap-10 '>
            <motion.div
                initial={{ y: '-50%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }} className='text-[#f0eeee] text-center'>
                <h1 className='text-6xl font-bold'>New epic backgrounds</h1>
                <p className='text-lg mb-8 mt-2'>Get a unique background to make your profile look legendary</p>
            </motion.div>

            <motion.div
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .8, ease: 'easeInOut' }}
                className='relative'>
                <div className='absolute -left-[3.4em] top-1/2 p-1 rounded-full border-2 border-[#3e3d3d] cursor-pointer -translate-y-1/2  '>
                    <AiFillCaretLeft style={{ color: '#472ea9', fontSize: '2em' }} />
                </div>
                <div className='absolute -right-[3.4em] top-1/2 p-1 rounded-full border-2 border-[#3e3d3d] cursor-pointer -translate-y-1/2 '>
                    <AiFillCaretRight style={{ color: '#472ea9', fontSize: '2em' }} />
                </div>
                <div className='grid grid-cols-4 w-[90em] h-[15em] gap-10 '>
                    {images.map((img, idx) => (
                        <motion.div
                            initial={{ y: "50%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: `${(idx * .4)}`, ease: 'easeInOut' }}
                        >
                            <Image key={idx} src={img} alt='bg-img' className='w-full h-full object-cover rounded-2xl' />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.button
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .8, ease: 'easeInOut' }}
                className='uppercase bg-[#6948ee] px-5 py-4 rounded-xl  text-white text-sm tracking-wider'>Go To marketplace</motion.button>
        </div>
    )
}

export default EpicBackground
