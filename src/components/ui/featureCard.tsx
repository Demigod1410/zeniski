import React from 'react'
import { BackgroundGradient } from './background-gradient'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface FeatureCardProps {
    icon: StaticImport,
    heading: String,
    subheading: String
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, heading, subheading}) => {
    return (
        <>
            <BackgroundGradient>
                <div className="rounded-[22px] p-6 sm:p-8 bg-black dark:bg-zinc-900 h-64 flex flex-col justify-between">
                    <div className="h-full flex flex-col">
                        <div className='flex items-center pb-6 gap-6'>
                        <Image src={icon} width={36} height={36} className='text-black bg-trasparent' alt={'icon'} />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-200 dark:text-neutral-900 leading-tight">
                            {heading}
                        </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 dark:text-neutral-400 flex-grow leading-relaxed">
                            {subheading}
                        </p>
                    </div>
                </div>
            </BackgroundGradient>
        </>
    )
}

export default FeatureCard