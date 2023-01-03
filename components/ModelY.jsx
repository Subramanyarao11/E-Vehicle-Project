import Link from 'next/link'
export default function ModelY() {
    return (
        <section id="modelY" className="car-section">
            <img
                className="car-img"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70"
                alt="model y"
            />
            <div className="car-details">
                <h2 className="car-name">Model Y</h2>
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
                <Link href="#modelX">
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
