'use client'

import React from "react";
import Zottie from "lottie-react";
import lottieLoader from "../public/lottieAni/Anilotti.json"

const Lottie = () => {
    return (
        <div className="flex-center h-screen w-full">
            <Zottie animationData={lottieLoader} loop={true} />
        </div>
    )
}

export default Lottie