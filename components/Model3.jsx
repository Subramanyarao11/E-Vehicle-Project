import Link from 'next/link'

export default function Model3() {
    return (
        <section id="model3" className="car-section">
            <img
                className="car-img"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"
                alt="model 3"
                width={4096}
                height={2560}
            />
            <div className="car-details">
                <h2 className="car-name">Model 3</h2>
                <p className="car-tagline">
                    Order Online for <span className="underline"> Touchless Delivery </span>
                </p>
            </div>
            <div className="car-buttons">
                <Link href="#" className="btn">
                    Custom Order
                </Link>
                <Link href="#" className="btn inventory">
                    Existing Inventory
                </Link>
            </div>
            <div className="down-arrow">
                <Link href="#modelY">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12 animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
