import React from 'react';
import { useForm } from "react-hook-form";
import './PageSection.css';
import { Button } from './Button';
import { WithFaleMais, WithoutFaleMais } from './tariff'

function PageSection2({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        var div1 = document.getElementById('div1')
        var div2 = document.getElementById('div2')
        div1.hidden = false
        div2.hidden = false
        var valueWithout = document.getElementById('1')
        var valueWith = document.getElementById('2')
        valueWith.innerHTML = 'R$' + WithFaleMais(parseInt(data.origin), parseInt(data.destination), parseInt(data.minutes), parseInt(data.plan)).toFixed(2)
        valueWithout.innerHTML = 'R$' + WithoutFaleMais(parseInt(data.origin), parseInt(data.destination), parseInt(data.minutes)).toFixed(2)
    }

    return (
        <>
            <div className={lightBg ? 'home__page-section' : 'home__page-section darkBg'}>
                <div className='container'>
                    <div className='row home__page-row'
                        style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className='col'>
                            <div className='home__page-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p className={lightTextDesc ? 'home__page-subtitle' : 'home__page-subtitle dark'}>
                                    {description}
                                </p>
                                <form className="form-row">
                                    <label className="page-label" >Origem: </label>
                                    <select className="page-select" id="origin" name="origin" ref={register}>
                                        <option value="11">011</option>
                                        <option value="16">016</option>
                                        <option value="17">017</option>
                                        <option value="18">018</option>
                                    </select>
                                    <label className="page-label" >Destino: </label>
                                    <select className="page-select" id="destination" name="destination" defaultValue="16" ref={register}>
                                        <option value="11">011</option>
                                        <option value="16">016</option>
                                        <option value="17">017</option>
                                        <option value="18">018</option>
                                    </select>
                                </form>
                                <label className="page-label" >Minutos</label>
                                <input className="page-minutes" type="number" name="minutes" defaultValue={20} ref={register} />
                                <label className="page-label" >FaleMais: </label>
                                <select className="page-select" id="plan" name="plan" ref={register}>
                                    <option value="30">30</option>
                                    <option value="60">60</option>
                                    <option value="120">120</option>
                                </select>
                                <div hidden='x' className='home__page-text-wrapper' id='div1'>
                                    <label className="page-label2" >Sem FaleMais: </label>
                                    <p className="costwithout" id='1'></p>
                                </div>
                                <div hidden='x' className='home__page-text-wrapper' id='div2'>
                                    <label className="page-label2" >Com FaleMais: </label>
                                    <p className="costwith" id='2'></p>
                                </div>
                                <Button buttonSize='btn--wide' buttonColor='blue' onClick={handleSubmit(onSubmit)}>
                                    {buttonLabel}
                                </Button>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__page-img-wrapper'>
                                <img src={img} alt={alt} className='home__page-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageSection2;