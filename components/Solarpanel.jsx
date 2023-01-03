import Link from 'next/link'
export default function Solarpanel() {
    return (
        <section id="solarPanel" className="car-section">
            <img
                className="car-img"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D"
                alt="Solar Panel"
            />
            <div className="car-details">
                <h2 className="car-name">Solar Panel</h2>
                <p className="car-tagline">Lowest Cost Solar Panels in America</p>
            </div>
            <div className="car-buttons">
                <Link href="#" className="btn">
                    Order Now
                </Link>
                <Link href="#" className="btn inventory">
                    Learn More
                </Link>
            </div>
            <div className="down-arrow">
                <Link href="#solarRoof">
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
