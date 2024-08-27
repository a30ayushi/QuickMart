import React from 'react';
import './Home.css';
import Homeimg from './HomeImage.png';
import Earbuds from './EarBuds.jpg';
import Kurti from './KurtiSet.jpg';
import TV from './tv.jpg';
import Mixer from './Mixer1.jpg';
import Alexa from './Speaker.jpg';
import Suit from './suit.jpg';
import ipad from './ipad.jpg';
import Product from './Product';

function Home() {
    return (
        <div className='Home'>
            <div className='Home_container'>
                <img className='Home_image' src={Homeimg} alt="Error Loading Image" />

                <div className="home_row">
                    <Product id="12321341"
                        title="JBL Tune 230NC TWS, Active Noise Cancellation Earbuds with Mic, Massive 40 Hrs Playtime with Speed Charge, Adjustable EQ APP, 4Mics for Perfect Calls, Google Fast Pair, Bluetooth 5.2 (Black)"
                        price={5749}
                        image={Earbuds}
                        rating={5} />

                    <Product id="49538094"
                        title="Apple 2022 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)"
                        price={81590}
                        image={ipad}
                        rating={5} />
                </div>

                <div className="home_row">
                    <Product id="49252850"
                        title="All-New Echo Dot (5th Gen, 2023 release) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor and Alexa"
                        price={5499}
                        image={Alexa}
                        rating={4} />

                    <Product id="23445930"
                        title="Blackberrys Men's 3 Piece Slim Fit Suits-NL-Jaguar 3"
                        price={10995}
                        image={Suit}
                        rating={3} />

                    <Product id="256528193"
                        title="Prestige IRIS Plus 750 watt mixer grinder"
                        price={3165}
                        image={Mixer}
                        rating={4} />
                </div>

                <div className="home_row">
                    <Product id="3254354345"
                        title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={80000}
                        image={TV}
                        rating={5} />

                    <Product id="90829332"
                        title="Rangnavi Women Rayon Anarkali Embroidered Printed Kurta Pant and Dupatta Set"
                        price={845}
                        image={Kurti}
                        rating={4} />
                </div>
            </div>
        </div>
    );
}

export default Home;