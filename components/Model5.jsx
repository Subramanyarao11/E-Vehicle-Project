import Link from 'next/link'
export default function Model5() {
    return (
        <section id="modelS" className="car-section">
            <img
                className="car-img"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
                alt="model S"
            />
            <div className="car-details">
                <h2 className="car-name">Model S</h2>
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
                <Link href="#solarPanel">
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
