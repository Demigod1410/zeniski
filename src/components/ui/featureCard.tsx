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
                <div className="rounded-[22px] p-5 sm:p-8 bg-black dark:bg-zinc-900">
                    <div className="">
                        <div className='flex pb-5 gap-6'>

                        <Image src={icon} width={30} className='text-black bg-trasparent' alt={'icon'} />
                        <p className="text-sm font-bold sm:text-base text-gray-300 dark:text-neutral-900">
                            {heading}
                        </p>
                        </div>
                        <p className="text-xs text-gray-300 dark:text-neutral-400">
                            {subheading}
                        </p>
                    </div>
                </div>
            </BackgroundGradient>
        </>
    )
}

export default FeatureCard