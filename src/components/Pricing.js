import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Planos FaleMais</h1>
                    <div className='pricing__container'>
                        <Link to='#' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>FaleMais 30</h3>
                                <h4>R$5.99</h4>
                                <p>mensais</p>
                                <ul className='pricing__container-features'>
                                    <li>Fale de graça por até</li>
                                    <li style={{ fontWeight: 800, fontSize: 20 }}>30 minutos</li>
                                    <li>Só pague o excedente</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Escolher Plano
                                </Button>
                            </div>
                        </Link>
                        <Link to='#' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>FaleMais 60</h3>
                                <h4>R$9.99</h4>
                                <p>mensais</p>
                                <ul className='pricing__container-features'>
                                    <li>Fale de graça por até</li>
                                    <li style={{ fontWeight: 800, fontSize: 20 }}>60 minutos</li>
                                    <li>Só pague o excedente</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='blue'>
                                    Escolher Plano
                                </Button>
                            </div>
                        </Link>
                        <Link to='#' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>FaleMais 120</h3>
                                <h4>$13.99</h4>
                                <p>mensais</p>
                                <ul className='pricing__container-features'>
                                    <li>Fale de graça por até</li>
                                    <li style={{ fontWeight: 800, fontSize: 20 }}>120 minutos</li>
                                    <li>Só pague o excedente</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Escolher Plano
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Pricing;